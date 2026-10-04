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

/**
 * Componente principal de la aplicación.
 * Define la jerarquía de los Providers de contexto globales (Autenticación, Tema y Contactos)
 * y configura el enrutamiento de la aplicación mediante React Router.
 */
export default function App() {
  return (
    <BrowserRouter>
      {/* Contexto de sesión y autenticación */}
      <AuthContextProvider>
        {/* Contexto del tema visual (oscuro / claro) */}
        <ThemeContextProvider>
          {/* Contexto de la lista de contactos y mensajería */}
          <ContactContextProvider>
            <Routes>
              {/* Ruta pública: formulario de inicio de sesión */}
              <Route path="/" element={<LoginScreen />} />

              {/* Rutas protegidas: solo accesibles si el usuario está autenticado */}
              <Route element={<ProtectedRoute />}>
                {/* Layout principal que contiene la barra de servidores, la sidebar y la barra superior */}
                <Route element={<AppLayout />}>
                  {/* Pantalla principal con la lista de amigos y pestañas */}
                  <Route path="/home" element={<HomeScreen />} />
                  {/* Pantalla de conversación individual según el ID del contacto */}
                  <Route path="/chat/:contactId" element={<ContactDetailScreen />} />
                </Route>
              </Route>

              {/* Ruta comodín para capturar cualquier URL inexistente y mostrar la pantalla 404 */}
              <Route path="*" element={<NotFoundScreen />} />
            </Routes>
          </ContactContextProvider>
        </ThemeContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}
