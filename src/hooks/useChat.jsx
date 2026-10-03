import { useEffect } from 'react';
import { useContacts } from '../contexts/ContactContext';

export default function useChat(contactId) {
    const { contacts, sendMessage, markMessagesAsSeen } = useContacts();

    const contact = contacts.find((c) => c.id === Number(contactId));

    useEffect(() => {
        if (contactId) {
            markMessagesAsSeen(contactId);
        }
    }, [contactId, markMessagesAsSeen]);

    function handleSendMessage(text) {
        if (!contactId || !text.trim()) return;
        sendMessage(contactId, text);
    }

    return {
        contact,
        messages: contact?.messages || [],
        sendMessage: handleSendMessage,
    };
}
