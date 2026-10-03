// src/components/chat/MessageList.jsx
import React, { useEffect, useRef } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import './MessageList.css';

export default function MessageList({ messages, contact }) {
    const endOfMessagesRef = useRef(null);
    const { currentUser } = useAuth();

    // Auto-scroll al final con cada mensaje nuevo
    useEffect(() => {
        endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    // Inicial del usuario actual o 'M' por defecto
    const userInitial = currentUser?.name ? currentUser.name.trim().charAt(0).toUpperCase() : 'M';

    return (
        <div className="message-list-container">
            {messages.map((msg) => {
                const isMe = msg.author === 'Me';

                return (
                    <div key={msg.id} className="message-row">
                        {/* Avatar condicional: inicial si es "Me", o imagen si es el contacto de GTA */}
                        {isMe ? (
                            <div className="message-initial-avatar">
                                {userInitial}
                            </div>
                        ) : (
                            <img
                                src={contact.image}
                                alt={contact.name}
                                className="message-avatar"
                            />
                        )}

                        <div className="message-body">
                            <div className="message-meta">
                                <span className={`message-author ${isMe ? 'author-me' : ''}`}>
                                    {isMe ? (currentUser?.name || 'Me') : msg.author}
                                </span>
                                <span className="message-time">{msg.created_at}</span>
                            </div>
                            <p className="message-text">{msg.content}</p>
                        </div>
                    </div>
                );
            })}
            <div ref={endOfMessagesRef} />
        </div>
    );
}