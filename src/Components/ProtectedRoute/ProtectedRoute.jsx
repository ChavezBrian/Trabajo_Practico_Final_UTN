import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

/**
 * Componente guardián de rutas protegidas (ProtectedRoute).
 * Verifica si existe un usuario autenticado en el AuthContext.
 * Si no hay sesión activa, redirige al usuario a la página de login ('/').
 * Si está autenticado, renderiza las rutas anidadas a través del componente <Outlet />.
 */
export default function ProtectedRoute() {
    const { currentUser } = useAuth();

    // Redirección si no hay usuario conectado
    if (!currentUser) {
        return <Navigate to="/" replace />;
    }

    // Permite el renderizado de los componentes hijos protegidos
    return <Outlet />;
}
