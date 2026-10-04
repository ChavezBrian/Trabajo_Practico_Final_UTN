import React, { useState } from 'react';
import './MessageInput.css';

/**
 * Campo inferior para redactar y enviar mensajes (MessageInput).
 * Maneja el estado controlado del input de texto y despacha el mensaje al pulsar Enter o enviar el formulario.
 *
 * @param {object} props - Propiedades del componente.
 * @param {Function} props.onSendMessage - Callback ejecutado con el texto del mensaje enviado.
 * @param {string} props.contactName - Nombre del contacto para mostrar en el placeholder dinámico.
 */
export default function MessageInput({ onSendMessage, contactName }) {
    // Estado local para capturar el texto que el usuario está escribiendo
    const [text, setText] = useState('');

    /**
     * Manejador del submit del formulario.
     * Previene la recarga de página, valida que el mensaje no esté vacío,
     * despacha el callback de envío y resetea el input a una cadena vacía.
     */
    function handleSubmit(e) {
        e.preventDefault();
        if (!text.trim()) return;

        onSendMessage(text);
        setText('');
    }

    return (
        <form className="message-form" onSubmit={handleSubmit}>
            <div className="message-input-wrapper">
                <input
                    type="text"
                    className="message-input"
                    placeholder={`Message @${contactName}`}
                    aria-label={`Message @${contactName}`}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
        </form>
    );
}