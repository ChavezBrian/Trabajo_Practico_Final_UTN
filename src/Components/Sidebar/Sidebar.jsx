import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContacts } from '../../contexts/ContactContext';
import { useAuth } from '../../contexts/AuthContext';
import { useTheme } from '../../contexts/ThemeContext';
import './Sidebar.css';

/**
 * Barra lateral de navegación de mensajes directos (Sidebar).
 * Incluye:
 * - Buscador en tiempo real de conversaciones.
 * - Botón para retornar a la sección de amigos (/home).
 * - Lista de chats directos con avatares, estados de conexión e indicador de mensajes no leídos.
 * - Barra inferior del perfil de usuario con botón para alternar el tema visual y botón para cerrar sesión.
 */
export default function Sidebar() {
    const { contacts } = useContacts();
    const { currentUser, logout } = useAuth();
    const { theme, toggleTheme } = useTheme();
    const location = useLocation();
    const navigate = useNavigate();

    // Estado del buscador de conversaciones en la sidebar
    const [searchTerm, setSearchTerm] = useState('');

    // Filtrado de contactos según el texto ingresado en el buscador
    const filteredContacts = contacts.filter((contact) =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase().trim())
    );

    // Comprueba si se encuentra en la pantalla de inicio (/home)
    const isHomeActive = location.pathname === '/home';

    // Cierra sesión y redirige al formulario de login
    function handleLogout() {
        logout();
        navigate('/');
    }

    return (
        <aside className="discord-sidebar">
            {/* 1. Buscador superior de conversaciones */}
            <div className="sidebar-search-container">
                <input
                    type="text"
                    className="sidebar-search-input"
                    placeholder="Find or start a conversation"
                    aria-label="Find or start a conversation"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {/* 2. Botón de acceso a la sección de Amigos (Home) */}
            <div className="sidebar-navigation-items">
                <Link
                    to="/home"
                    className={`btn-return-home ${isHomeActive ? 'active' : ''}`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-people-fill" viewBox="0 0 16 16">
                        <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                    </svg>
                    <span className="title-friends">Friends</span>
                </Link>
            </div>

            {/* Encabezado de la lista de mensajes directos */}
            <header className="sidebar-header">
                <span className="sidebar-title">Direct Messages</span>
            </header>

            {/* 3. Lista de chats directos con cada contacto */}
            <nav className="contacts-list" aria-label="Direct Messages List">
                {filteredContacts.length > 0 ? (
                    filteredContacts.map((contact) => {
                        const isActive = location.pathname === `/chat/${contact.id}`;

                        // Conteo de mensajes entrantes con estado no leído ('unseen')
                        const unreadCount = contact.messages.filter(
                            (msg) => msg.delivery_status === 'unseen' && msg.author !== 'Me'
                        ).length;

                        return (
                            <Link
                                key={contact.id}
                                to={`/chat/${contact.id}`}
                                className={`contact-item ${isActive ? 'active' : ''}`}
                            >
                                {/* Avatar con badge de estado de conexión */}
                                <div className="avatar-wrapper">
                                    <img
                                        src={contact.image}
                                        alt={contact.name}
                                        className="avatar-image"
                                    />
                                    <span className={`status-badge ${contact.status}`} />
                                </div>

                                {/* Nombre y estado del contacto */}
                                <div className="contact-info">
                                    <span className="contact-name">{contact.name}</span>
                                    <span className="contact-status-text">{contact.status}</span>
                                </div>

                                {/* Badge numérico de mensajes no leídos */}
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

            {/* 4. Barra inferior del perfil del usuario conectado */}
            <footer className="user-profile-bar">
                <div className="user-profile-info">
                    {/* Inicial del usuario y su estado de conexión */}
                    <div className="avatar-wrapper user-avatar-wrapper">
                        <div className="user-initial-avatar">
                            {currentUser?.name ? currentUser.name.trim().charAt(0).toUpperCase() : '?'}
                        </div>
                        <span className={`status-badge ${currentUser?.status || 'online'}`} />
                    </div>

                    {/* Nombre y estado personalizado */}
                    <div className="user-text-details">
                        <span className="current-user-name">{currentUser?.name || 'Guest'}</span>
                        <span className="current-user-status" title={currentUser?.customStatus || 'Exploring Runaterra'}>
                            {currentUser?.customStatus || 'Exploring Runaterra'}
                        </span>
                    </div>
                </div>

                {/* Acciones de la barra de usuario: alternar tema y cerrar sesión */}
                <div className="user-profile-actions">
                    {/* Botón para cambiar entre tema claro y tema oscuro */}
                    <button
                        type="button"
                        className="profile-icon-btn"
                        title={theme === 'dark' ? 'Change to light mode' : 'Change to dark mode'}
                        aria-label={theme === 'dark' ? 'Change to light mode' : 'Change to dark mode'}
                        onClick={toggleTheme}
                    >
                        {theme === 'dark' ? (
                            /* Icono de sol cuando el tema activo es oscuro */
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="5" />
                                <line x1="12" y1="1" x2="12" y2="3" />
                                <line x1="12" y1="21" x2="12" y2="23" />
                                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                                <line x1="1" y1="12" x2="3" y2="12" />
                                <line x1="21" y1="12" x2="23" y2="12" />
                                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                            </svg>
                        ) : (
                            /* Icono de luna cuando el tema activo es claro */
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                            </svg>
                        )}
                    </button>

                    {/* Botón para cerrar sesión */}
                    <button
                        type="button"
                        className="profile-icon-btn"
                        title="Log Out"
                        aria-label="Log Out"
                        onClick={handleLogout}
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                            <polyline points="16 17 21 12 16 7"></polyline>
                            <line x1="21" y1="12" x2="9" y2="12"></line>
                        </svg>
                    </button>
                </div>
            </footer>
        </aside>
    );
}