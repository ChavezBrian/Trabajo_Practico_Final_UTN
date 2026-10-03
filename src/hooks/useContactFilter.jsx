import { useState } from 'react';
import { useContacts } from '../contexts/ContactContext';

export default function useContactFilter() {
    const { contacts } = useContacts();

    // Pestaña activa: 'online' | 'all'
    const [activeTab, setActiveTab] = useState('online');
    // Buscador interno de amigos
    const [searchQuery, setSearchQuery] = useState('');

    // 1. Filtrar por pestaña (en Discord: 'online', 'idle' y 'dnd' cuentan como conectados activos)
    const tabFilteredContacts = contacts.filter((contact) => {
        if (activeTab === 'online') {
            return contact.status !== 'offline';
        }
        return true; // 'all' muestra a todos
    });

    // 2. Filtrar por el texto del buscador
    const displayedContacts = tabFilteredContacts.filter((contact) =>
        contact.name.toLowerCase().includes(searchQuery.toLowerCase().trim())
    );

    return {
        activeTab,
        setActiveTab,
        searchQuery,
        setSearchQuery,
        displayedContacts,
        totalCount: displayedContacts.length,
    };
}
