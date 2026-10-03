import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import DiscordTitleBar from '../DiscordTitleBar/DiscordTitleBar';
import ServerRail from '../ServerRail/ServerRail';
import Sidebar from '../Sidebar/Sidebar';
import { useTheme } from '../../contexts/ThemeContext';
import './AppLayout.css';

export default function AppLayout() {
    const location = useLocation();
    const isChatActive = location.pathname.startsWith('/chat');
    const { theme } = useTheme();

    return (
        <div className={`app-shell theme-${theme}`}>
            <DiscordTitleBar />
            <div className={`app-layout ${isChatActive ? 'chat-active' : 'home-active'}`}>
                <ServerRail />
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