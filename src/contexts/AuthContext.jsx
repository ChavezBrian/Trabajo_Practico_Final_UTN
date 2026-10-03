// src/contexts/AuthContext.jsx
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
    // Si ya había un usuario guardado en localStorage, lo leemos
    const [currentUser, setCurrentUser] = useState(() => {
        try {
            const savedUser = localStorage.getItem('chat_user');
            return savedUser ? JSON.parse(savedUser) : null;
        } catch (error) {
            console.error('Error reading user from localStorage:', error);
            return null;
        }
    });

    function login(userData) {
        const user = {
            name: userData.name,
            email: userData.email,
            status: 'online', // Estado por defecto al iniciar sesión
            customStatus: 'Exploring Grove Street'
        };

        setCurrentUser(user);
        try {
            localStorage.setItem('chat_user', JSON.stringify(user));
        } catch (error) {
            console.error('Error saving user to localStorage:', error);
        }
    }

    function logout() {
        setCurrentUser(null);
        try {
            localStorage.removeItem('chat_user');
        } catch (error) {
            console.error('Error removing user from localStorage:', error);
        }
    }

    return (
        <AuthContext.Provider value={{ currentUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

// Hook personalizado para consumirlo fácilmente
export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthContextProvider');
    }
    return context;
}