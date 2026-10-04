import React from 'react';
import { Link } from 'react-router-dom';
import './ChatHeader.css';

/**
 * Cabecera de la conversación de chat (ChatHeader).
 * Muestra:
 * - Botón de retroceso para dispositivos móviles.
 * - Símbolo '@' seguido del nombre del contacto.
 * - Indicador visual y etiqueta textual del estado de presencia ('online', 'idle', 'dnd', 'offline').
 * - Botón en el extremo derecho para alternar el panel lateral del perfil de usuario.
 *
 * @param {object} props - Propiedades del componente.
 * @param {object} props.contact - Datos del contacto activo en la conversación.
 * @param {boolean} props.isProfileOpen - Indica si el panel de perfil está desplegado actualmente.
 * @param {Function} props.onToggleProfile - Función para alternar el despliegue del panel de perfil.
 */
export default function ChatHeader({ contact, isProfileOpen, onToggleProfile }) {
    return (
        <header className="chat-header">
            {/* Lado izquierdo: Información del usuario y botón volver en móvil */}
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

            {/* Lado derecho: Acciones de la cabecera (botón para desplegar el perfil) */}
            <div className="chat-header-actions">
                <button
                    type="button"
                    className={`chat-header-action-btn ${isProfileOpen ? 'active' : ''}`}
                    onClick={onToggleProfile}
                    title={isProfileOpen ? 'Hide User Profile' : 'Show User Profile'}
                    aria-label={isProfileOpen ? 'Hide User Profile' : 'Show User Profile'}
                >
                    {/* Icono oficial de Discord para mostrar u ocultar el perfil del usuario */}
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                </button>
            </div>
        </header>
    );
}