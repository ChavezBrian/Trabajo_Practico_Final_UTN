import React from 'react';
import { useNavigate } from 'react-router-dom';
import useContactFilter from '../../hooks/useContactFilter';
import './HomeScreen.css';

export default function HomeScreen() {
    const navigate = useNavigate();
    const {
        activeTab,
        setActiveTab,
        searchQuery,
        setSearchQuery,
        displayedContacts,
        totalCount,
    } = useContactFilter();

    return (
        <section className="friends-screen">
            {/* 1. Header con pestañas */}
            <header className="friends-topbar">
                <div className="topbar-section-title">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-people-fill" viewBox="0 0 16 16">
                        <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                    </svg>
                    <h2>Friends</h2>
                </div>

                <div className="topbar-divider" />

                <nav className="friends-tabs" aria-label="Friends filter tabs">
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
                {/* Input de búsqueda estilo Discord con lupa */}
                <div className="friends-search-wrapper">
                    <div className="friends-search-bar">
                        <svg
                            className="friends-search-icon"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                        >
                            <circle cx="11" cy="11" r="8" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        </svg>
                        <input
                            type="text"
                            className="friends-search-input"
                            placeholder="Search"
                            aria-label="Search friends"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        {searchQuery && (
                            <button
                                type="button"
                                className="friends-search-clear-btn"
                                aria-label="Clear search"
                                title="Clear"
                                onClick={() => setSearchQuery('')}
                            >
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </button>
                        )}
                    </div>
                </div>

                {/* Contador de amigos */}
                <h3 className="friends-count-title">
                    {activeTab === 'online' ? 'Online' : 'All Friends'} — {totalCount}
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
                                    title={`Message ${contact.name}`}
                                    aria-label={`Message ${contact.name}`}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        navigate(`/chat/${contact.id}`);
                                    }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="grey" className="bi bi-chat-dots-fill" viewBox="0 0 16 16">
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
