import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import DiscordTitleBar from '../DiscordTitleBar/DiscordTitleBar';
import ServerRail from '../ServerRail/ServerRail';
import Sidebar from '../Sidebar/Sidebar';
import { useTheme } from '../../contexts/ThemeContext';
import './AppLayout.css';

/**
 * Layout principal de la aplicación (AppLayout).
 * Estructura la interfaz al estilo de Discord Desktop:
 * - Aplica la clase del tema activo (`theme-dark` o `theme-light`).
 * - Muestra la barra superior de título (`DiscordTitleBar`).
 * - Contiene el riel lateral de servidores (`ServerRail`).
 * - Muestra la sidebar con los mensajes directos y lista de amigos (`Sidebar`).
 * - Renderiza el contenido dinámico de la ruta activa a través del `<Outlet />`.
 */
export default function AppLayout() {
    const location = useLocation();

    // Determina si actualmente se está visualizando un chat individual
    const isChatActive = location.pathname.startsWith('/chat');

    // Tema visual actual ('dark' o 'light')
    const { theme } = useTheme();

    return (
        <div className={`app-shell theme-${theme}`}>
            {/* Barra superior de ventana estilo Discord */}
            <DiscordTitleBar />

            {/* Contenedor principal con clases dinámicas para control responsive */}
            <div className={`app-layout ${isChatActive ? 'chat-active' : 'home-active'}`}>
                {/* Riel vertical de servidores a la izquierda */}
                <ServerRail />

                {/* Área central que agrupa la sidebar de contactos y el contenido principal */}
                <div className="app-main-stage">
                    <Sidebar />
                    <main className="main-content-area">
                        <Outlet />
                    </main>
                </div>
            </div>
        </div>
    );
}