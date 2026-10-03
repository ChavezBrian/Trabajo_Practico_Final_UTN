// src/components/chat/MessageInput.jsx
import React, { useState } from 'react';
import './MessageInput.css';

export default function MessageInput({ onSendMessage, contactName }) {
    const [text, setText] = useState('');

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
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
        </form>
    );
}