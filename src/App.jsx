// src/App.jsx
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ContactContextProvider } from './contexts/ContactContext';
import { AuthContextProvider } from './contexts/AuthContext';
import { ThemeContextProvider } from './contexts/ThemeContext';
import LoginScreen from './Screens/LoginScreen/LoginScreen.jsx'
import HomeScreen from './Screens/HomeScreen/HomeScreen.jsx'
import ContactDetailScreen from './Screens/ContactDetailScreen/ContactDetailScreen.jsx'
import NotFoundScreen from './Screens/NotFoundScreen/NotFoundScreen.jsx'
import AppLayout from './Components/AppLayout/AppLayout.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <ThemeContextProvider>
          <Routes>
            {/* Login ocupa toda la pantalla sin sidebar */}
            <Route path="/" element={<LoginScreen />} />

            {/* Rutas con la Sidebar persistente a la izquierda */}
            <Route element={<ContactContextProvider />}>
              <Route element={<AppLayout />}>
                <Route path="/home" element={<HomeScreen />} />
                <Route path="/chat/:contactId" element={<ContactDetailScreen />} />
              </Route>
            </Route>

            <Route path="*" element={<NotFoundScreen />} />
          </Routes>
        </ThemeContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}
