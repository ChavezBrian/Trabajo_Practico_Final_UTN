import React, { useState, useEffect } from 'react';
import './LoadingScreen.css';

// Lista de consejos temáticos de Discord que se muestran durante la pantalla de carga
const DISCORD_TIPS = [
    "You can type /shrug or /tableflip to quickly express yourself in chat.",
    "Holding Shift while clicking the delete button will bypass confirmation.",
    "You can press Ctrl + K to instantly search and switch to any conversation.",
    "Discord was founded in 2015 to give people a place to talk and hang out.",
    "You can customize your online status to Online, Idle, Do Not Disturb, or Invisible.",
    "Hover over timestamps to see the exact time and date a message was sent.",
    "Connecting to Discord gateway... Spinning up voice and text channels."
];

/**
 * Pantalla animada de carga estilo Discord (LoadingScreen).
 * Muestra el logo oficial de Discord pulsando, puntos animados de progreso
 * y un consejo aleatorio ("Did You Know").
 *
 * @param {object} props - Propiedades del componente.
 * @param {Function} props.onComplete - Función de callback que se ejecuta tras completar el tiempo de carga.
 */
export default function LoadingScreen({ onComplete }) {
    // Selecciona un consejo de Discord aleatorio una única vez al montar el componente
    const [tip] = useState(() => DISCORD_TIPS[Math.floor(Math.random() * DISCORD_TIPS.length)]);

    useEffect(() => {
        // Temporizador simulado de carga (3 segundos) con función de limpieza garantizada
        const timer = setTimeout(() => {
            if (onComplete) {
                onComplete();
            }
        }, 3000);

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <div className="discord-loading-screen" role="status" aria-live="polite">
            <div className="loading-content">
                {/* Logo oficial de Clyde con animación de brillo y respiración */}
                <div className="loading-logo-wrapper">
                    <svg
                        className="loading-clyde-logo"
                        viewBox="0 0 127.14 96.36"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-label="Loading Discord"
                    >
                        <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,45.91,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,45.91,96.12,53,91.08,65.69,84.69,65.69Z" />
                    </svg>
                </div>

                {/* Tres puntos animados de carga */}
                <div className="loading-dots-container" aria-hidden="true">
                    <span className="loading-dot" />
                    <span className="loading-dot" />
                    <span className="loading-dot" />
                </div>

                {/* Sección informativa "DID YOU KNOW" característica de Discord */}
                <div className="loading-tip-container">
                    <h2 className="loading-tip-header">DID YOU KNOW</h2>
                    <p className="loading-tip-text">{tip}</p>
                </div>
            </div>
        </div>
    );
}
