import { useEffect } from 'react';
import { useContacts } from '../contexts/ContactContext';

/**
 * Hook personalizado para gestionar la lógica de una conversación individual de chat.
 *
 * @param {string|number} contactId - Identificador del contacto con quien se conversa.
 * @returns {object} - Contiene la información del contacto actual, su lista de mensajes y la función para enviar nuevos mensajes.
 */
export default function useChat(contactId) {
    // Obtenemos los contactos y las funciones globales del contexto de contactos
    const { contacts, sendMessage, markMessagesAsSeen } = useContacts();

    // Buscamos el contacto actual según el ID recibido por parámetro (convertido a número)
    const contact = contacts.find((c) => c.id === Number(contactId));

    // Efecto para marcar automáticamente los mensajes no leídos como 'vistos' al abrir el chat
    useEffect(() => {
        if (contactId) {
            markMessagesAsSeen(contactId);
        }
    }, [contactId, markMessagesAsSeen]);

    // Función auxiliar para validar y despachar el envío de un nuevo mensaje de texto
    function handleSendMessage(text) {
        if (!contactId || !text.trim()) return;
        sendMessage(contactId, text);
    }

    return {
        contact,
        messages: contact?.messages || [], // Retorna los mensajes del contacto o un array vacío por defecto
        sendMessage: handleSendMessage,
    };
}
