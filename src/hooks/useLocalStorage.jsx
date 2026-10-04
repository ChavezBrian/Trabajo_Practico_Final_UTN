import { useState, useEffect } from 'react';

/**
 * Hook personalizado para sincronizar y persistir estado en el localStorage del navegador.
 *
 * @param {string} key - Clave con la que se guardará el dato en localStorage.
 * @param {*} initialValue - Valor inicial por defecto si la clave no existe en el almacenamiento.
 * @returns {[any, Function]} - Tupla con el valor almacenado y la función para actualizarlo.
 */
export default function useLocalStorage(key, initialValue) {
    // Inicialización perezosa (lazy) del estado para leer de localStorage solo en el primer render
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = localStorage.getItem(key);
            // Si el ítem existe en localStorage se parsea desde JSON, de lo contrario se usa el valor inicial
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error(`Error al leer la clave "${key}" desde localStorage:`, error);
            return initialValue;
        }
    });

    // Efecto secundario que sincroniza cualquier cambio de `storedValue` directamente en localStorage
    useEffect(() => {
        try {
            // Si el valor es null o undefined, eliminamos la clave del almacenamiento
            if (storedValue === null || storedValue === undefined) {
                localStorage.removeItem(key);
            } else {
                // Serializamos el valor a formato JSON y lo guardamos
                localStorage.setItem(key, JSON.stringify(storedValue));
            }
        } catch (error) {
            console.error(`Error al guardar la clave "${key}" en localStorage:`, error);
        }
    }, [key, storedValue]);

    return [storedValue, setStoredValue];
}
