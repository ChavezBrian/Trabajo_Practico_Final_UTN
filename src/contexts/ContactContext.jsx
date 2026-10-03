// src/contexts/ContactContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { contact_list_server } from '../mocks/contacts.mock.js';

const ContactContext = createContext();

export function ContactContextProvider({ children }) {
    // 1. Inicialización lazy: lee de localStorage o usa el mock inicial
    const [contacts, setContacts] = useState(() => {
        try {
            const savedContacts = localStorage.getItem('chat_contacts');
            return savedContacts ? JSON.parse(savedContacts) : contact_list_server;
        } catch (error) {
            console.error('Error reading contacts from localStorage:', error);
            return contact_list_server;
        }
    });

    // 2. Cada vez que los contactos cambien, persistimos en localStorage
    useEffect(() => {
        try {
            localStorage.setItem('chat_contacts', JSON.stringify(contacts));
        } catch (error) {
            console.error('Error saving contacts to localStorage:', error);
        }
    }, [contacts]);

    const providerValues = {
        contacts,
        setContacts,
    };

    return (
        <ContactContext.Provider value={providerValues}>
            {children || <Outlet />}
        </ContactContext.Provider>
    );
}

export function useContacts() {
    const context = useContext(ContactContext);
    if (!context) {
        throw new Error('useContacts must be used within a ContactContextProvider');
    }
    return context;
}