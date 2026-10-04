import React, { createContext, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

// Creación del contexto del tema visual (claro / oscuro)
const ThemeContext = createContext();

/**
 * Proveedor del contexto del tema visual de la aplicación.
 * Permite alternar entre 'dark' (modo oscuro por defecto) y 'light' (modo claro),
 * persistiendo la preferencia del usuario en localStorage.
 *
 * @param {object} props - Propiedades del componente con sus componentes hijos (children).
 */
export function ThemeContextProvider({ children }) {
    // Estado del tema guardado en localStorage ('dark' por defecto)
    const [theme, setTheme] = useLocalStorage('discord_theme', 'dark');

    // Función para alternar entre modo oscuro y claro
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, isDark: theme === 'dark' }}>
            {children}
        </ThemeContext.Provider>
    );
}

/**
 * Hook personalizado para acceder al tema activo y a la función toggleTheme.
 * Lanza un error si se ejecuta fuera de un ThemeContextProvider.
 */
export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeContextProvider');
    }
    return context;
}
