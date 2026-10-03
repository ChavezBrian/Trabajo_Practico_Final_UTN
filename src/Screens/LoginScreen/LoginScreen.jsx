import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import LoginForm from '../../Components/LoginForm/LoginForm';

export default function LoginScreen() {
    const { currentUser } = useAuth();

    if (currentUser) {
        return <Navigate to="/home" replace />;
    }

    return (
        <div>
            <LoginForm />
        </div>
    );
}
