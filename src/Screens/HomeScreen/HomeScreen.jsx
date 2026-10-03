import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContacts } from '../../contexts/ContactContext'
import './HomeScreen.css';

export default function HomeScreen() {
    const { contacts } = useContacts();
    const navigate = useNavigate();

    // Pestaña activa: 'online' | 'all'
    const [activeTab, setActiveTab] = useState('online');
    // Buscador interno de amigos
    const [searchQuery, setSearchQuery] = useState('');

    // 1. Filtrar por pestaña (en Discord: 'online', 'idle' y 'dnd' cuentan como conectados activos)
    const tabFilteredContacts = contacts.filter((contact) => {
        if (activeTab === 'online') {
            return contact.status !== 'offline';
        }
        return true; // 'all' muestra a todos
    });

    // 2. Filtrar por el texto del buscador
    const displayedContacts = tabFilteredContacts.filter((contact) =>
        contact.name.toLowerCase().includes(searchQuery.toLowerCase().trim())
    );

    return (
        <section className="friends-screen">
            {/* 1. Header con pestañas */}
            <header className="friends-topbar">
                <div className="topbar-section-title">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
                        <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                    </svg>
                    <h2>Friends</h2>
                </div>

                <div className="topbar-divider" />

                <nav className="friends-tabs">
                    <button
                        type="button"
                        className={`tab-btn ${activeTab === 'online' ? 'active' : ''}`}
                        onClick={() => setActiveTab('online')}
                    >
                        Online
                    </button>
                    <button
                        type="button"
                        className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
                        onClick={() => setActiveTab('all')}
                    >
                        All
                    </button>
                    <button type="button" className="add-friend-btn">
                        Add Friend
                    </button>
                </nav>
            </header>

            {/* 2. Área principal de contenido */}
            <div className="friends-content-area">
                {/* Input de búsqueda */}
                <div className="friends-search-wrapper">
                    <input
                        type="text"
                        className="friends-search-input"
                        placeholder="Search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                {/* Contador de amigos */}
                <h3 className="friends-count-title">
                    {activeTab === 'online' ? 'Online' : 'All Friends'} — {displayedContacts.length}
                </h3>

                {/* Lista de filas de amigos */}
                <div className="friends-list">
                    {displayedContacts.map((contact) => (
                        <div
                            key={contact.id}
                            className="friend-row"
                            onClick={() => navigate(`/chat/${contact.id}`)}
                        >
                            <div className="friend-info-left">
                                <div className="friend-avatar-wrapper">
                                    <img
                                        src={contact.image}
                                        alt={contact.name}
                                        className="friend-avatar"
                                    />
                                    <span className={`status-badge-lg ${contact.status}`} />
                                </div>
                                <div className="friend-names">
                                    <span className="friend-username">{contact.name}</span>
                                    <span className="friend-status-text">{contact.status}</span>
                                </div>
                            </div>

                            {/* Botón de acción rápida: Abrir Chat */}
                            <div className="friend-actions">
                                <button
                                    type="button"
                                    className="action-icon-btn"
                                    title="Message"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        navigate(`/chat/${contact.id}`);
                                    }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="grey" class="bi bi-chat-dots-fill" viewBox="0 0 16 16">
                                        <path d="M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}

                    {displayedContacts.length === 0 && (
                        <div className="empty-friends-state">
                            <p>No one is around to play with Wumpus.</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
