import React from 'react';
import { contact_list_server } from '../../mocks/contacts.mock';
import './ContactProfilePanel.css';

/**
 * Panel lateral desplegable con la tarjeta de perfil del contacto (ContactProfilePanel).
 * Diseñado con la estética de Discord:
 * - Banner superior temático con color del campeón y botón para cerrar.
 * - Avatar grande de 78px con insignia de estado de conexión y borde de recorte.
 * - Nombre del personaje, handle (@nombre) y etiquetas de Runeterra/Champion.
 * - Sección 'About Me' con la descripción breve del personaje.
 * - Sección 'Member Since' con fecha de ingreso e icono de calendario.
 *
 * @param {object} props - Propiedades del componente.
 * @param {object} props.contact - Objeto con los datos del contacto a exhibir.
 * @param {Function} props.onClose - Función para cerrar el panel.
 */
export default function ContactProfilePanel({ contact, onClose }) {
    if (!contact) return null;

    // Respaldo de seguridad con los datos maestros del servidor mock
    const serverMatch = contact_list_server.find((s) => s.id === contact.id);
    const bannerColor = contact.banner_color || serverMatch?.banner_color || '#5865f2';
    const memberSince = contact.member_since || serverMatch?.member_since || 'Oct 10, 2013';
    const description = contact.description || serverMatch?.description || 'Champion of Runeterra exploring the realms.';

    return (
        <aside className="contact-profile-panel" aria-label={`${contact.name}'s Profile`}>
            {/* Tarjeta contenedora con esquinas redondeadas y borde de 1px como Discord */}
            <div className="profile-card-wrapper">
                {/* 1. Banner superior con color temático del campeón */}
                <div
                    className="profile-panel-banner"
                    style={{
                        backgroundColor: bannerColor,
                        backgroundImage: `linear-gradient(135deg, ${bannerColor} 0%, rgba(0, 0, 0, 0.45) 100%)`
                    }}
                >
                    {/* Botón flotante para cerrar el panel de perfil */}
                    <button
                        type="button"
                        className="profile-panel-close-btn"
                        onClick={onClose}
                        title="Close Profile"
                        aria-label="Close Profile"
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>

                {/* 2. Avatar grande con insignia de estado flotando sobre el límite del banner */}
                <div className="profile-panel-avatar-container">
                    <div className="profile-panel-avatar-wrapper">
                        <img
                            src={contact.image}
                            alt={contact.name}
                            className="profile-panel-avatar-img"
                        />
                        <span className={`profile-panel-status-badge ${contact.status}`} />
                    </div>
                </div>

                {/* 3. Cuerpo del perfil en tarjeta */}
                <div className="profile-panel-body">
                    {/* Nombre para mostrar y nombre de usuario */}
                    <div className="profile-panel-name-block">
                        <h3 className="profile-panel-name">{contact.name}</h3>
                        <span className="profile-panel-tag">@{contact.name.toLowerCase().replace(/\s+/g, '')}</span>
                    </div>

                    {/* Badges / Etiquetas temáticas con separación */}
                    <div className="profile-panel-tags">
                        <span className="profile-tag-pill">
                            <span className="profile-tag-dot" style={{ backgroundColor: bannerColor }} />
                            Runeterra
                        </span>
                        <span className="profile-tag-pill">Champion</span>
                    </div>

                    <div className="profile-panel-divider" />

                    {/* Sección: Descripción / Acerca de mí */}
                    <div className="profile-panel-section">
                        <h4 className="profile-section-heading">About Me</h4>
                        <p className="profile-section-text">{description}</p>
                    </div>

                    <div className="profile-panel-divider" />

                    {/* Sección: Fecha de registro (Member Since) con icono de calendario */}
                    <div className="profile-panel-section">
                        <h4 className="profile-section-heading">Member Since</h4>
                        <div className="profile-member-since-row">
                            <div className="profile-calendar-icon">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                    <line x1="16" y1="2" x2="16" y2="6"></line>
                                    <line x1="8" y1="2" x2="8" y2="6"></line>
                                    <line x1="3" y1="10" x2="21" y2="10"></line>
                                </svg>
                            </div>
                            <span className="profile-member-since-date">{memberSince}</span>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}
