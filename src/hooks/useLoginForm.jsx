import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function useLoginForm() {
    const navigate = useNavigate();
    const { login } = useAuth();

    const [formState, setFormState] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({});

    const limits = {
        name: 30,
        email: 50,
        password: 20,
    };

    function handleChange(event) {
        const { name, value } = event.target;

        if (limits[name] && value.length > limits[name]) {
            return;
        }

        setFormState((prevState) => ({
            ...prevState,
            [name]: value,
        }));

        if (errors[name]) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                [name]: "",
            }));
        }
    }

    function validate() {
        const newErrors = {};

        // Name validation
        if (!formState.name.trim()) {
            newErrors.name = "Name is required.";
        } else if (formState.name.trim().length < 3) {
            newErrors.name = "Name must be at least 3 characters long.";
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formState.email.trim()) {
            newErrors.email = "Email address is required.";
        } else if (!emailRegex.test(formState.email)) {
            newErrors.email = "Please enter a valid email address.";
        }

        // Password validation
        if (!formState.password) {
            newErrors.password = "Password is required.";
        } else if (formState.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters long.";
        }

        return newErrors;
    }

    function handleSubmit(event) {
        event.preventDefault();

        const formValidationErrors = validate();

        if (Object.keys(formValidationErrors).length > 0) {
            setErrors(formValidationErrors);
            return;
        }

        setErrors({});

        login({
            name: formState.name,
            email: formState.email
        });

        navigate("/home");
    }

    return {
        formState,
        errors,
        limits,
        handleSubmit,
        handleChange,
    };
}