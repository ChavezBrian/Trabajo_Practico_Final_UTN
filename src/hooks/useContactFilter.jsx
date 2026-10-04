import { useState } from 'react';
import { useContacts } from '../contexts/ContactContext';

/**
 * Hook personalizado para manejar el filtrado y búsqueda de contactos en la pantalla de inicio (HomeScreen).
 * Permite filtrar por estado (pestañas: 'online' | 'all') y por texto de búsqueda en tiempo real.
 *
 * @returns {object} - Estados y lista de contactos filtrados listos para renderizar.
 */
export default function useContactFilter() {
    // Obtenemos la lista global de contactos desde el contexto
    const { contacts } = useContacts();

    // Estado para controlar la pestaña activa: 'online' (conectados) o 'all' (todos)
    const [activeTab, setActiveTab] = useState('online');

    // Estado para capturar el texto ingresado en el buscador
    const [searchQuery, setSearchQuery] = useState('');

    // 1. Filtrado por pestaña seleccionada:
    // En el estilo de Discord, los estados 'online', 'idle' y 'dnd' se consideran conectados activos
    const tabFilteredContacts = contacts.filter((contact) => {
        if (activeTab === 'online') {
            return contact.status !== 'offline';
        }
        return true; // En la pestaña 'all', se muestran todos los contactos
    });

    // 2. Filtrado adicional por el texto de búsqueda (ignorando mayúsculas y espacios extra)
    const displayedContacts = tabFilteredContacts.filter((contact) =>
        contact.name.toLowerCase().includes(searchQuery.toLowerCase().trim())
    );

    return {
        activeTab,
        setActiveTab,
        searchQuery,
        setSearchQuery,
        displayedContacts,
        totalCount: displayedContacts.length, // Conteo de amigos resultantes del filtro
    };
}
