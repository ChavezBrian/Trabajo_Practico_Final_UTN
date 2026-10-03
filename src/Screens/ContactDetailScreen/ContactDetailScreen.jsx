// src/screens/ContactDetailScreen.jsx
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import useChat from '../../hooks/useChat';
import ChatHeader from '../../Components/Chat/ChatHeader';
import MessageList from '../../Components/Message/MessageList';
import MessageInput from '../../Components/Message/MessageInput';
import './ContactDetailScreen.css';

export default function ContactDetailScreen() {
    const { contactId } = useParams();
    const { contact, messages, sendMessage } = useChat(contactId);

    if (!contact) {
        return <Navigate to="/home" replace />;
    }

    return (
        <section className="chat-screen-container">
            <ChatHeader contact={contact} />
            <MessageList messages={messages} contact={contact} />
            <MessageInput onSendMessage={sendMessage} contactName={contact.name} />
        </section>
    );
}