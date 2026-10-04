import { createContext, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

// Creación del contexto de autenticación
const AuthContext = createContext();

/**
 * Proveedor del contexto de autenticación.
 * Gestiona el usuario activo de la sesión, persistiendo su información en localStorage.
 *
 * @param {object} props - Propiedades del componente con sus componentes hijos (children).
 */
export function AuthContextProvider({ children }) {
    // Estado del usuario actual persistido bajo la clave 'chat_user' (inicia en null si no hay sesión)
    const [currentUser, setCurrentUser] = useLocalStorage('chat_user', null);

    /**
     * Inicia sesión guardando la información básica del usuario y su estado temático.
     * @param {object} userData - Datos ingresados en el formulario (name, email).
     */
    function login(userData) {
        const user = {
            name: userData.name,
            email: userData.email,
            status: 'online',
            customStatus: 'Exploring Runaterra' // Estado personalizado mostrado en la tarjeta de perfil
        };
        setCurrentUser(user);
    }

    /**
     * Cierra la sesión activa removiendo al usuario del estado y del localStorage.
     */
    function logout() {
        setCurrentUser(null);
    }

    return (
        <AuthContext.Provider value={{ currentUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

/**
 * Hook personalizado para consumir el contexto de autenticación de forma sencilla.
 * Lanza un error si se invoca fuera del AuthContextProvider.
 */
export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthContextProvider');
    }
    return context;
}