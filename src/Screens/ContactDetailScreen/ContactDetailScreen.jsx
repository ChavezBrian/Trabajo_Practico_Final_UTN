// src/screens/ContactDetailScreen.jsx
import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useContacts } from '../../contexts/ContactContext'
import ChatHeader from '../../Components/chat/ChatHeader';
import MessageList from '../../Components/Message/MessageList';
import MessageInput from '../../Components/Message/MessageInput';
import './ContactDetailScreen.css';

export default function ContactDetailScreen() {
    const { contactId } = useParams();
    const { contacts, setContacts } = useContacts();

    const currentContact = contacts.find((c) => c.id === Number(contactId));

    // Al entrar al chat, marcamos los mensajes entrantes como leídos
    useEffect(() => {
        if (!currentContact) return;

        const hasUnseenMessages = currentContact.messages.some(
            (msg) => msg.delivery_status === 'unseen' && msg.author !== 'Me'
        );

        if (hasUnseenMessages) {
            setContacts((prevContacts) =>
                prevContacts.map((contact) => {
                    if (contact.id === currentContact.id) {
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
                })
            );
        }
    }, [contactId]);

    if (!currentContact) {
        return <Navigate to="/home" replace />;
    }

    // src/screens/ContactDetailScreen.jsx (o donde tengas handleSendMessage)

    function handleSendMessage(text) {
        // Formatear la hora en formato 12hs con AM/PM en inglés (ej: "10:58 PM")
        const now = new Date();
        const formattedTime = now.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        });

        const newMessage = {
            id: Date.now(),
            content: text,
            author: 'Me',
            created_at: `Today at ${formattedTime}`,
            delivery_status: 'unseen',
        };

        setContacts((prevContacts) =>
            prevContacts.map((contact) => {
                if (contact.id === currentContact.id) {
                    return {
                        ...contact,
                        messages: [...contact.messages, newMessage],
                    };
                }
                return contact;
            })
        );
    }

    return (
        <section className="chat-screen-container">
            <ChatHeader contact={currentContact} />
            <MessageList messages={currentContact.messages} contact={currentContact} />
            <MessageInput onSendMessage={handleSendMessage} contactName={currentContact.name} />
        </section>
    );
}