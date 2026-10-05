import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import useChat from '../../hooks/useChat';
import ChatHeader from '../../Components/Chat/ChatHeader';
import MessageList from '../../Components/Chat/MessageList';
import MessageInput from '../../Components/Chat/MessageInput';
import ContactProfilePanel from '../../Components/Chat/ContactProfilePanel';
import './ContactDetailScreen.css';

/**
 * Pantalla de detalle de conversación y chat (ContactDetailScreen).
 * Obtiene el `contactId` desde la URL, maneja la recepción y envío de mensajes
 * y controla el despliegue del panel lateral del perfil del contacto.
 */
export default function ContactDetailScreen() {
    // Parámetro dinámico de la ruta (:contactId)
    const { contactId } = useParams();

    // Hook que proporciona la información del contacto, mensajes y la función para enviar
    const { contact, messages, sendMessage } = useChat(contactId);

    // Estado local para alternar la visibilidad de la tarjeta/panel de perfil del contacto
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    // Si el contacto no existe en la lista, redirige a la pantalla principal
    if (!contact) {
        return <Navigate to="/home" replace />;
    }

    // Función para alternar el despliegue del panel de perfil
    const toggleProfile = () => {
        setIsProfileOpen((prev) => !prev);
    };

    return (
        <section className="chat-screen-container">
            {/* Cabecera del chat con el nombre, estado y botón para desplegar el perfil */}
            <ChatHeader
                contact={contact}
                isProfileOpen={isProfileOpen}
                onToggleProfile={toggleProfile}
            />

            {/* Contenedor flexible del cuerpo del chat */}
            <div className="chat-layout-body">
                {/* Columna principal: lista de mensajes y campo de entrada */}
                <div className="chat-messages-pane">
                    <MessageList messages={messages} contact={contact} />
                    <MessageInput onSendMessage={sendMessage} contactName={contact.name} />
                </div>

                {/* Fondo oscurecido (backdrop) para cerrar el panel de perfil en tablets y pantallas medianas */}
                {isProfileOpen && (
                    <div
                        className="profile-backdrop"
                        onClick={() => setIsProfileOpen(false)}
                        aria-hidden="true"
                    />
                )}

                {/* Panel lateral desplegable con la información del contacto */}
                {isProfileOpen && (
                    <ContactProfilePanel
                        contact={contact}
                        onClose={() => setIsProfileOpen(false)}
                    />
                )}
            </div>
        </section>
    );
}