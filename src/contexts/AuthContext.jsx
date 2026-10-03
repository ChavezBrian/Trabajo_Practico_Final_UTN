import { createContext, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
    const [currentUser, setCurrentUser] = useLocalStorage('chat_user', null);

    function login(userData) {
        const user = {
            name: userData.name,
            email: userData.email,
            status: 'online',
            customStatus: 'Exploring Grove Street'
        };
        setCurrentUser(user);
    }

    function logout() {
        setCurrentUser(null);
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