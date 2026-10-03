import { useState, useEffect } from 'react';

export default function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error(`Error reading key "${key}" from localStorage:`, error);
            return initialValue;
        }
    });

    useEffect(() => {
        try {
            if (storedValue === null || storedValue === undefined) {
                localStorage.removeItem(key);
            } else {
                localStorage.setItem(key, JSON.stringify(storedValue));
            }
        } catch (error) {
            console.error(`Error saving key "${key}" to localStorage:`, error);
        }
    }, [key, storedValue]);

    return [storedValue, setStoredValue];
}
