import React, { useEffect, useRef } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import './MessageList.css';

/**
 * Lista de mensajes de la conversación (MessageList).
 * Renderiza cada mensaje del historial con su autor, fecha/hora y avatar correspondiente.
 * Ejecuta un desplazamiento automático suave (auto-scroll) hacia el último mensaje enviado o recibido.
 *
 * @param {object} props - Propiedades del componente.
 * @param {Array} props.messages - Lista de mensajes de la conversación.
 * @param {object} props.contact - Datos del contacto con quien se conversa.
 */
export default function MessageList({ messages, contact }) {
    // Referencia al elemento final del contenedor para manejar el scroll automático
    const endOfMessagesRef = useRef(null);
    const { currentUser } = useAuth();

    // Efecto para desplazar la vista suavemente hasta el final cada vez que la lista de mensajes cambia
    useEffect(() => {
        endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    // Obtiene la letra inicial del usuario conectado para su avatar personalizado (o 'M' por defecto)
    const userInitial = currentUser?.name ? currentUser.name.trim().charAt(0).toUpperCase() : 'M';

    return (
        <div className="message-list-container">
            {messages.map((msg) => {
                // Comprueba si el mensaje fue emitido por el usuario actual ('Me') o por el contacto
                const isMe = msg.author === 'Me';

                return (
                    <div key={msg.id} className="message-row">
                        {/* Avatar condicional: inicial si es el usuario propio, o foto si es el contacto */}
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

                        {/* Cuerpo del mensaje: metadatos (autor y hora) y contenido del texto */}
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

            {/* Elemento invisible de anclaje para el auto-scroll */}
            <div ref={endOfMessagesRef} />
        </div>
    );
}