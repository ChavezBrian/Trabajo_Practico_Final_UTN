import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import LoginForm from '../../Components/LoginForm/LoginForm';

/**
 * Pantalla de inicio de sesión (LoginScreen).
 * Si el usuario ya cuenta con una sesión activa en el AuthContext,
 * lo redirige automáticamente a la pantalla principal (/home).
 */
export default function LoginScreen() {
    const { currentUser } = useAuth();

    // Redirección condicional: evita que un usuario ya autenticado vuelva a ver el login
    if (currentUser) {
        return <Navigate to="/home" replace />;
    }

    return (
        <div>
            {/* Componente visual y funcional del formulario de login */}
            <LoginForm />
        </div>
    );
}
