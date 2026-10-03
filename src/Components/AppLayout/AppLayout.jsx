// src/components/AppLayout.jsx
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../SideBar/SideBar';
import './AppLayout.css';

export default function AppLayout() {
    const location = useLocation();
    const isChatActive = location.pathname.startsWith('/chat');

    return (
        <div className={`app-layout ${isChatActive ? 'chat-active' : 'home-active'}`}>
            <Sidebar />
            <main className="main-content-area">
                <Outlet />
            </main>
        </div>
    );
}