import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundScreen.css';

/**
 * Pantalla 404 (NotFoundScreen).
 * Se muestra cuando el usuario navega a una ruta inexistente o no registrada.
 * Ofrece un mensaje temático estilo Discord y un enlace para retornar a la pantalla principal.
 */
export default function NotFoundScreen() {
    return (
        <div className='not-found-screen-container'>
            <section className="not-found-container">
                {/* Código de error */}
                <span className="not-found-code">404</span>

                {/* Título de la página no encontrada */}
                <h1 className="not-found-title">Wrong Turn?</h1>

                {/* Mensaje descriptivo */}
                <p className="not-found-description">
                    You seem to be lost in the void. The channel or page you are looking for doesn't exist.
                </p>

                {/* Botón de retorno al inicio */}
                <Link to="/home" className="not-found-btn">
                    Back to Home
                </Link>
            </section>
        </div>
    );
}
