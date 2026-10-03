// src/components/Sidebar.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useContacts } from '../../contexts/ContactContext';
import { useAuth } from '../../contexts/AuthContext';
import './Sidebar.css';

export default function Sidebar() {
    const { contacts } = useContacts();
    const { currentUser } = useAuth();
    const location = useLocation();
    const [searchTerm, setSearchTerm] = useState('');

    const filteredContacts = contacts.filter((contact) =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase().trim())
    );

    const isHomeActive = location.pathname === '/home';

    return (
        <aside className="discord-sidebar">
            <div className="sidebar-search-container">
                <input
                    type="text"
                    className="sidebar-search-input"
                    placeholder="Find or start a conversation"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {/* 2. Botón para volver a Home / Friends */}
            <div className="sidebar-navigation-items">
                <Link
                    to="/home"
                    className={`btn-return-home ${isHomeActive ? 'active' : ''}`}
                >
                    {/* SVG Oficial del icono Friends de Discord */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
                        <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                    </svg>
                    <span className="title-friends">Friends</span>
                </Link>
            </div>

            <header className="sidebar-header">
                <span className="sidebar-title">Direct Messages</span>
            </header>

            <nav className="contacts-list">
                {filteredContacts.length > 0 ? (
                    filteredContacts.map((contact) => {
                        const isActive = location.pathname === `/chat/${contact.id}`;

                        // Contar mensajes entrantes no leídos
                        const unreadCount = contact.messages.filter(
                            (msg) => msg.delivery_status === 'unseen' && msg.author !== 'Me'
                        ).length;

                        return (
                            <Link
                                key={contact.id}
                                to={`/chat/${contact.id}`}
                                className={`contact-item ${isActive ? 'active' : ''}`}
                            >
                                <div className="avatar-wrapper">
                                    <img
                                        src={contact.image}
                                        alt={contact.name}
                                        className="avatar-image"
                                    />
                                    <span className={`status-badge ${contact.status}`} />
                                </div>

                                <div className="contact-info">
                                    <span className="contact-name">{contact.name}</span>
                                    <span className="contact-status-text">{contact.status}</span>
                                </div>

                                {/* Badge rojo de notificación de Discord */}
                                {unreadCount > 0 && (
                                    <div className="unread-badge">
                                        {unreadCount}
                                    </div>
                                )}
                            </Link>
                        );
                    })
                ) : (
                    <div className="no-contacts-message">
                        <span>No contacts found</span>
                    </div>
                )}
            </nav>

            <footer className="user-profile-bar">
                <div className="user-profile-info">
                    <div className="avatar-wrapper user-avatar-wrapper">
                        <div className="user-initial-avatar">
                            {currentUser?.name ? currentUser.name.trim().charAt(0).toUpperCase() : '?'}
                        </div>
                        <span className={`status-badge ${currentUser?.status || 'online'}`} />
                    </div>

                    <div className="user-text-details">
                        <span className="current-user-name">{currentUser?.name || 'Guest'}</span>
                        <span className="current-user-status" title={currentUser?.customStatus}>
                            {currentUser?.customStatus || 'Online'}
                        </span>
                    </div>
                </div>
            </footer>
        </aside>
    );
}