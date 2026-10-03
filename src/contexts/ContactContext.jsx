import { createContext, useContext, useCallback } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { contact_list_server } from '../mocks/contacts.mock.js';

const ContactContext = createContext();

export function ContactContextProvider({ children }) {
    // 1. Inicialización y persistencia usando custom hook useLocalStorage
    const [contacts, setContacts] = useLocalStorage('chat_contacts', contact_list_server);

    // 2. Función de dominio para enviar un mensaje a un contacto
    const sendMessage = useCallback((contactId, text) => {
        if (!text || !text.trim()) return;

        const now = new Date();
        const formattedTime = now.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        });

        const newMessage = {
            id: Date.now(),
            content: text.trim(),
            author: 'Me',
            created_at: `Today at ${formattedTime}`,
            delivery_status: 'unseen',
        };

        setContacts((prevContacts) =>
            prevContacts.map((contact) => {
                if (contact.id === Number(contactId)) {
                    return {
                        ...contact,
                        messages: [...contact.messages, newMessage],
                    };
                }
                return contact;
            })
        );
    }, [setContacts]);

    // 3. Función de dominio para marcar mensajes entrantes como leídos
    const markMessagesAsSeen = useCallback((contactId) => {
        setContacts((prevContacts) => {
            const target = prevContacts.find((c) => c.id === Number(contactId));
            if (!target) return prevContacts;

            const hasUnseen = target.messages.some(
                (msg) => msg.delivery_status === 'unseen' && msg.author !== 'Me'
            );
            if (!hasUnseen) return prevContacts; // Retorna la misma referencia, evitando re-renders

            return prevContacts.map((contact) => {
                if (contact.id === Number(contactId)) {
                    return {
                        ...contact,
                        messages: contact.messages.map((msg) =>
                            msg.delivery_status === 'unseen' && msg.author !== 'Me'
                                ? { ...msg, delivery_status: 'seen' }
                                : msg
                        ),
                    };
                }
                return contact;
            });
        });
    }, [setContacts]);

    const providerValues = {
        contacts,
        setContacts,
        sendMessage,
        markMessagesAsSeen,
    };

    return (
        <ContactContext.Provider value={providerValues}>
            {children}
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