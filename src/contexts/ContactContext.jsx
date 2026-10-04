import { createContext, useContext, useCallback } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { contact_list_server } from '../mocks/contacts.mock.js';

// Creación del contexto global de contactos y mensajes
const ContactContext = createContext();

/**
 * Proveedor del contexto de contactos.
 * Administra el listado de contactos, los historiales de mensajes individuales,
 * la persistencia en localStorage y las acciones de envío y lectura de mensajes.
 *
 * @param {object} props - Propiedades del componente con sus componentes hijos (children).
 */
export function ContactContextProvider({ children }) {
    // 1. Inicialización y persistencia de la lista de contactos usando el hook useLocalStorage.
    // Si no existen contactos previos en el almacenamiento local, se cargan los mocks del servidor.
    const [contacts, setContacts] = useLocalStorage('chat_contacts', contact_list_server);

    /**
     * 2. Envía un nuevo mensaje al chat de un contacto específico.
     * Envuelto en useCallback para mantener una referencia estable de la función entre renderizados.
     *
     * @param {string|number} contactId - Identificador del contacto destinatario.
     * @param {string} text - Contenido del mensaje enviado.
     */
    const sendMessage = useCallback((contactId, text) => {
        if (!text || !text.trim()) return;

        const now = new Date();
        const formattedTime = now.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        });

        // Estructura del nuevo mensaje enviado por el usuario actual ('Me')
        const newMessage = {
            id: Date.now(),
            content: text.trim(),
            author: 'Me',
            created_at: `Today at ${formattedTime}`,
            delivery_status: 'unseen',
        };

        // Inmutabilidad: actualizamos únicamente el contacto que coincide con el contactId
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

    /**
     * 3. Marca como vistos ('seen') todos los mensajes entrantes de un contacto específico.
     * Evita renderizados innecesarios si no hay mensajes con estado 'unseen' pendientes.
     *
     * @param {string|number} contactId - Identificador del contacto a actualizar.
     */
    const markMessagesAsSeen = useCallback((contactId) => {
        setContacts((prevContacts) => {
            const target = prevContacts.find((c) => c.id === Number(contactId));
            if (!target) return prevContacts;

            // Verificamos si existe al menos un mensaje no leído del otro contacto
            const hasUnseen = target.messages.some(
                (msg) => msg.delivery_status === 'unseen' && msg.author !== 'Me'
            );
            if (!hasUnseen) return prevContacts; // Retorna la misma referencia, evitando re-renders

            // Mapeamos los mensajes marcando los entrantes no leídos como 'seen'
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

    // Objeto con los valores y funciones expuestas a todos los componentes consumidores
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

/**
 * Hook personalizado para consumir fácilmente el contexto de contactos.
 * Lanza un error explicativo si se utiliza fuera de ContactContextProvider.
 */
export function useContacts() {
    const context = useContext(ContactContext);
    if (!context) {
        throw new Error('useContacts must be used within a ContactContextProvider');
    }
    return context;
}