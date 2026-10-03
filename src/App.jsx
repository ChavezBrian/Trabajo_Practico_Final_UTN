import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ContactContextProvider } from './contexts/ContactContext';
import { AuthContextProvider } from './contexts/AuthContext';
import { ThemeContextProvider } from './contexts/ThemeContext';
import LoginScreen from './Screens/LoginScreen/LoginScreen.jsx';
import HomeScreen from './Screens/HomeScreen/HomeScreen.jsx';
import ContactDetailScreen from './Screens/ContactDetailScreen/ContactDetailScreen.jsx';
import NotFoundScreen from './Screens/NotFoundScreen/NotFoundScreen.jsx';
import AppLayout from './Components/AppLayout/AppLayout.jsx';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <ThemeContextProvider>
          <ContactContextProvider>
            <Routes>
              {/* Ruta pública de Login */}
              <Route path="/" element={<LoginScreen />} />

              {/* Rutas protegidas (requieren autenticación) */}
              <Route element={<ProtectedRoute />}>
                <Route element={<AppLayout />}>
                  <Route path="/home" element={<HomeScreen />} />
                  <Route path="/chat/:contactId" element={<ContactDetailScreen />} />
                </Route>
              </Route>

              {/* Página 404 */}
              <Route path="*" element={<NotFoundScreen />} />
            </Routes>
          </ContactContextProvider>
        </ThemeContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}
