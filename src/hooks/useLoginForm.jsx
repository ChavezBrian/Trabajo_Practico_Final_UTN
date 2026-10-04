import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

/**
 * Hook personalizado para controlar el formulario de inicio de sesión.
 * Maneja el estado de los campos, límites de longitud, validaciones con expresiones regulares,
 * errores por campo y el estado de carga simulado para el login.
 *
 * @returns {object} - Valores del formulario, errores, manejadores de eventos y función para finalizar el login.
 */
export default function useLoginForm() {
    // Obtenemos la función de login desde el contexto de autenticación
    const { login } = useAuth();

    // Estado principal con los valores controlados de los inputs
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        password: "",
    });

    // Estado para registrar los mensajes de error de validación de cada campo
    const [errors, setErrors] = useState({});

    // Estado para indicar si se está procesando la animación de carga antes de entrar
    const [isLoading, setIsLoading] = useState(false);

    // Límites máximos de caracteres permitidos por cada input
    const limits = {
        name: 30,
        email: 50,
        password: 20,
    };

    /**
     * Manejador de cambios para los inputs del formulario.
     * Previene que el usuario sobrepase el límite de caracteres y limpia errores activos del campo.
     */
    function handleChange(event) {
        const { name, value } = event.target;

        // Si existe un límite para el campo y el valor lo excede, se ignora el cambio
        if (limits[name] && value.length > limits[name]) {
            return;
        }

        // Actualizamos el valor del campo correspondiente
        setFormState((prevState) => ({
            ...prevState,
            [name]: value,
        }));

        // Si el campo tenía un error activo, lo limpiamos al escribir un nuevo valor
        if (errors[name]) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                [name]: "",
            }));
        }
    }

    /**
     * Valida los campos del formulario aplicando reglas de longitud y formato de email.
     * @returns {object} - Objeto con los errores encontrados (clave = nombre del campo).
     */
    function validate() {
        const newErrors = {};

        // Validación del nombre (obligatorio y mínimo 3 caracteres)
        if (!formState.name.trim()) {
            newErrors.name = "El nombre es obligatorio.";
        } else if (formState.name.trim().length < 3) {
            newErrors.name = "El nombre debe tener al menos 3 caracteres.";
        }

        // Validación del correo electrónico mediante expresión regular
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formState.email.trim()) {
            newErrors.email = "El correo electrónico es obligatorio.";
        } else if (!emailRegex.test(formState.email)) {
            newErrors.email = "Ingresa un correo electrónico válido.";
        }

        // Validación de la contraseña (obligatoria y mínimo 6 caracteres)
        if (!formState.password) {
            newErrors.password = "La contraseña es obligatoria.";
        } else if (formState.password.length < 6) {
            newErrors.password = "La contraseña debe tener al menos 6 caracteres.";
        }

        return newErrors;
    }

    /**
     * Manejador del envío (submit) del formulario.
     * Ejecuta las validaciones y, si son correctas, activa la pantalla de carga.
     */
    function handleSubmit(event) {
        event.preventDefault();

        const formValidationErrors = validate();

        // Si hay errores, los seteamos en el estado y detenemos la ejecución
        if (Object.keys(formValidationErrors).length > 0) {
            setErrors(formValidationErrors);
            return;
        }

        // Sin errores: limpiamos el estado de errores y activamos la carga
        setErrors({});
        setIsLoading(true);
    }

    /**
     * Finaliza el inicio de sesión invocando la función login del AuthContext con los datos del usuario.
     */
    function completeLogin() {
        login({
            name: formState.name,
            email: formState.email
        });
    }

    return {
        formState,
        errors,
        limits,
        isLoading,
        handleSubmit,
        handleChange,
        completeLogin,
    };
}