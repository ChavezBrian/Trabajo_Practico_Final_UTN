// src/components/chat/ChatHeader.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './ChatHeader.css';

export default function ChatHeader({ contact }) {
    return (
        <header className="chat-header">
            <div className="chat-header-user">
                <Link to="/home" className="chat-mobile-back" title="Back to contacts">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                </Link>
                <span className="chat-header-hashtag">@</span>
                <span className="chat-header-name">{contact.name}</span>
                <span className={`status-badge-inline ${contact.status}`} />
                <span className="chat-header-status-label">{contact.status}</span>
            </div>
        </header>
    );
}