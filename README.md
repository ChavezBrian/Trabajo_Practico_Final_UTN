# Trabajo Práctico Final - Frontend (UTN)

Una aplicación web de mensajería en tiempo real simulada, inspirada en la interfaz y experiencia de usuario de **Discord**, ambientada temáticamente en el universo de **League of Legends (Runeterra)**.

---

## 🚀 Enlaces del Proyecto

* **Repositorio de GitHub:** [https://github.com/ChavezBrian/Trabajo_Practico_Final_UTN](https://github.com/ChavezBrian/Trabajo_Practico_Final_UTN)
* **Despliegue en Producción (Vercel):** [https://trabajo-practico-final-utn.vercel.app](https://trabajo-practico-final-utn.vercel.app)

---

## 📌 Descripción General

El proyecto recrea fielmente el cliente web y de escritorio de **Discord**, adaptando su diseño, microinteracciones y flujo de navegación para sumergir al usuario en el universo de **League of Legends**.

Los usuarios pueden interactuar con campeones emblemáticos de las diversas regiones de Runeterra (Piltover, Zaun, Jonia, Demacia, Islas de la Sombra, Ciudad de Bandle), tales como **Jinx**, **Yasuo**, **Ahri**, **Ekko**, **Vi**, **Lux**, **Zed**, **Thresh**, **Caitlyn** y **Teemo**. La aplicación cuenta con autenticación simulada, estados de presencia en vivo, historial de chat persistente con indicadores de lectura, un panel de perfil de contacto detallado, pantalla de carga inmersiva y soporte completo para modo claro y modo oscuro.

---

## ✨ Novedades y Características Principales

### ⚔️ 1. Ambientación en el Universo de League of Legends (Runeterra)
* **Base de datos de campeones:** 10 contactos iniciales con avatares oficiales extraídos del CDN Data Dragon de Riot Games.
* **Historias y diálogos temáticos:** Mensajes predefinidos y biografías contextuales que reflejan la personalidad y el trasfondo de cada campeón en Runeterra.
* **Personalización visual:** Cada campeón cuenta con un color temático propio (`banner_color`) utilizado para teñir su banner de perfil y detalles visuales.

### 🌗 2. Sistema de Temas Claro y Oscuro (Dark / Light Mode)
* **Soporte multi-tema:** Implementación de `ThemeContext` que gestiona de manera global el estado de apariencia de la aplicación (`theme-dark` y `theme-light`).
* **Conmutador interactivo:** Botón accesible en la barra inferior de usuario de la barra lateral (`Sidebar`) que alterna entre sol y luna con transiciones suaves.
* **Variables CSS temáticas:** Más de 30 tokens CSS en [src/global.css](file:///c:/Users/Brian/Documents/Curso%20Programacion%20UTN/Trabajo-Practico-Final/src/global.css) adaptados para reproducir los esquemas de color oficiales de Discord en ambos modos.
* **Persistencia:** La preferencia del tema se almacena y recupera automáticamente desde `localStorage` (`discord_theme`).

### 🪪 3. Panel Lateral Desplegable de Perfil (`ContactProfilePanel`)
* **Tarjeta de perfil estilo Discord:** Vista lateral desplegable desde el botón de la cabecera del chat (`ChatHeader`).
* **Banner dinámico en gradiente:** Renderiza el color característico del campeón seleccionado con un degradado angular.
* **Avatar y presencia:** Imagen de 78px con borde de recorte e indicador de estado de conexión integrado (*online*, *idle*, *dnd*, *offline*).
* **Ficha biográfica completa:** Nombre, identificador `@handle`, insignias de Runeterra / Champion, sección *"About Me"* con biografía oficial y fecha de incorporación (*"Member Since"*).
* **Diseño adaptativo con backdrop:** En dispositivos móviles y tablets, el panel se despliega en superposición con un fondo oscurecido cerrable al tacto.

### ⏳ 4. Pantalla de Carga Animada (`LoadingScreen`)
* **Simulación de conexión de Discord:** Al iniciar sesión satisfactoriamente, se despliega una pantalla de carga animada de 3 segundos antes de ingresar al Home.
* **Animaciones icónicas:** Logo oficial de Clyde con efecto de respiración/brillo y puntos de carga sincronizados.
* **Consejos aleatorios ("Did You Know"):** Muestra mensajes rotativos con datos curiosos y atajos útiles sobre Discord.

### 🖥️ 5. Fidelidad de Interfaz de Escritorio
* **Barra de título (`DiscordTitleBar`):** Simula la cabecera nativa de Discord Desktop con controles de ventana (minimizar, maximizar, cerrar).
* **Riel de servidores (`ServerRail`):** Barra lateral izquierda con la píldora indicadora animada, botón interactivo con el logo de Discord y separadores estéticos.
* **Tipografía oficial `gg sans`:** Inclusión local de las fuentes oficiales de Discord (`gg sans`, `gg sans bold`, `gg sans medium`, `gg sans semibold`) para una experiencia idéntica a la aplicación original.

### 💬 6. Mensajería Directa y Gestión de Amigos
* **Conversaciones bidireccionales:** Envío de mensajes con fecha y hora actualizadas dinámicamente y autoría diferenciada (`Me` vs. Campeón).
* **Confirmación de lectura:** Actualización en tiempo real del estado de entrega (`seen` / `unseen`) y contador de mensajes pendientes en la barra lateral.
* **Filtrado dinámico:** Pestañas de amigos (*Online* y *All*) con sincronización de parámetros de búsqueda en la URL (`?tab=...` y `?search=...`).
* **Buscador en tiempo real:** Campo de búsqueda en la barra lateral para filtrar conversaciones instantáneamente.

### 🛡️ 7. Seguridad en Rutas y Despliegue SPA
* **Rutas protegidas (`ProtectedRoute`):** Redirección automática de usuarios no autenticados al login al intentar acceder a rutas privadas (`/home`, `/chat/:contactId`).
* **Soporte de recarga en Vercel:** Archivo [vercel.json](file:///c:/Users/Brian/Documents/Curso%20Programacion%20UTN/Trabajo-Practico-Final/vercel.json) con reescrituras para evitar errores 404 al recargar rutas profundas del cliente.

---

## 🛠️ Tecnologías y Librerías Utilizadas

| Tecnología | Rol en el Proyecto |
| :--- | :--- |
| **[React 19](https://react.dev/)** | Biblioteca base para la arquitectura de componentes y estado reactivo. |
| **[React Router DOM v7](https://reactrouter.com/)** | Enrutamiento SPA, rutas protegidas, parámetros dinámicos (`useParams`) y query params (`useSearchParams`). |
| **[Vite](https://vitejs.dev/)** | Entorno de desarrollo ultrarrápido y empaquetador para producción. |
| **Vanilla CSS (CSS3)** | Diseño modular, Flexbox, CSS Grid, animaciones `@keyframes`, tipografía personalizada y variables CSS. |
| **Web Storage API (`localStorage`)** | Persistencia en el navegador de credenciales de usuario, tema seleccionado y estado de los chats. |
| **Riot Games Data Dragon CDN** | Fuente oficial de avatares e información visual de los campeones de League of Legends. |
| **[Vercel](https://vercel.com/)** | Plataforma de despliegue continuo en la nube para aplicaciones frontend. |

---

## 🏗️ Arquitectura y Estructura del Código

El proyecto sigue una separación rigurosa entre presentación, estado global y lógica de negocio:

```plaintext
Trabajo-Practico-Final/
├── public/
│   ├── favicon.svg
│   ├── icons.svg
│   └── fonts/                     # Fuentes oficiales gg sans de Discord
├── src/
│   ├── assets/                    # Recursos visuales estáticos
│   ├── Components/
│   │   ├── AppLayout/             # Shell maestro (TitleBar + ServerRail + Sidebar + Outlet)
│   │   ├── Chat/                  # ChatHeader, MessageList, MessageInput, ContactProfilePanel
│   │   ├── DiscordTitleBar/       # Barra superior de ventana estilo Discord Desktop
│   │   ├── LoadingScreen/         # Pantalla animada de carga con Clyde y consejos
│   │   ├── LoginForm/             # Formulario validado con estados y feedback visual
│   │   ├── ProtectedRoute/        # Guardián de rutas protegidas
│   │   ├── ServerRail/            # Riel lateral izquierdo de servidores
│   │   └── Sidebar/               # Navegación lateral de mensajes directos y perfil de usuario
│   ├── contexts/
│   │   ├── AuthContext.jsx        # Gestión de usuario activo, login y logout
│   │   ├── ContactContext.jsx     # Gestión de lista de contactos, envío y visto de mensajes
│   │   └── ThemeContext.jsx       # Control global de modo claro / modo oscuro
│   ├── hooks/
│   │   ├── useChat.jsx            # Lógica de conversación por contactId
│   │   ├── useContactFilter.jsx   # Filtrado por pestaña y búsqueda de contactos
│   │   ├── useLocalStorage.jsx    # Sincronización genérica y reactiva con localStorage
│   │   └── useLoginForm.jsx       # Validaciones, límites de caracteres y control de submit
│   ├── mocks/
│   │   └── contacts.mock.js       # Base de datos inicial de campeones de League of Legends
│   ├── Screens/
│   │   ├── ContactDetailScreen/   # Pantalla principal de conversación y perfil de contacto
│   │   ├── HomeScreen/            # Pantalla general de lista de amigos con pestañas
│   │   ├── LoginScreen/           # Pantalla pública de inicio de sesión
│   │   └── NotFoundScreen/        # Pantalla de error 404 personalizada
│   ├── App.jsx                    # Jerarquía de Providers y declaración de rutas
│   ├── global.css                 # Variables de diseño, fuentes, scrollbars y resets
│   └── main.jsx                   # Punto de entrada de la aplicación
├── package.json
├── vercel.json                    # Reglas de reescritura para React Router en Vercel
└── README.md
```

### 1. Contextos Globales (`src/contexts/`)
* **`AuthContext`:** Administra el usuario autenticado (`currentUser`), funciones de acceso (`login`) y cierre de sesión (`logout`).
* **`ThemeContext`:** Provee el tema actual (`theme`), bandera booleana (`isDark`) y la función conmutadora (`toggleTheme`), persistiendo la preferencia en `localStorage`.
* **`ContactContext`:** Mantiene el estado centralizado de contactos y chats, exponiendo métodos de dominio (`sendMessage`, `markMessagesAsSeen`) y persistencia local.

### 2. Custom Hooks (`src/hooks/`)
* **`useLocalStorage`:** Hook genérico para almacenar y leer datos en `localStorage` de manera reactiva, blindado con bloques `try/catch`.
* **`useLoginForm`:** Controla campos controlados, límites de caracteres y validación de reglas de negocio para nombre, correo y contraseña.
* **`useChat`:** Resuelve la información del campeón a partir del parámetro `contactId`, marca automáticamente los mensajes como leídos y gestiona nuevos envíos.
* **`useContactFilter`:** Gestiona el filtrado reactivo de amigos por pestaña (*online* / *all*) y búsqueda textual por nombre.
* **`useTheme`:** Facilita el consumo del contexto del tema en cualquier componente del árbol.

---

## 📱 Responsividad y Accesibilidad

### Adaptabilidad por Dispositivos (320px a 2560px)
* **Escritorio (> 1024px):** Disposición completa simultánea con riel de servidores, barra lateral, área de conversación y panel de perfil de contacto desplegado en columna lateral persistente.
* **Tablets (769px a 1024px):** Interfaz fluida donde el panel de perfil se superpone lateralmente con un fondo oscurecido (*backdrop*) para maximizar el espacio de lectura.
* **Móviles (<= 768px):** Transición fluida entre la vista de contactos y la pantalla de chat a pantalla completa, con botón de retroceso superior para retornar a la lista de amigos.

### Accesibilidad (A11y)
* **Contraste de color certificado:** Colores contrastados tanto en modo oscuro como en modo claro para garantizar legibilidad óptima.
* **Semántica HTML5:** Uso de etiquetas semánticas (`<header>`, `<aside>`, `<main>`, `<section>`, `<nav>`, `<footer>`).
* **Formularios estructurados:** Inputs vinculados con sus etiquetas a través de `htmlFor` e `id`, acompañados de mensajes de error descriptivos.
* **Soporte para lectores de pantalla:** Atributos `aria-label`, `aria-hidden` y roles accesibles (`role="status"`, `aria-live="polite"`) en la pantalla de carga e inputs interactivos.

---

## 💡 Dificultades Presentadas y Soluciones

1. **Gestión unificada de temas visuales (Dark/Light Mode):**
   * *Desafío:* Diseñar una transición armónica entre ambos modos sin romper contrastes ni estilos específicos de Discord.
   * *Solución:* Creación de un sistema de variables CSS centralizadas en `src/global.css` aplicadas a nivel del elemento contenedor `.app-shell.theme-dark` / `.theme-light` y sincronizadas mediante `ThemeContext` y `useLocalStorage`.

2. **Panel de perfil de contacto responsivo:**
   * *Desafío:* Integrar una ficha de usuario completa sin comprometer el espacio del chat en pantallas medianas o reducidas.
   * *Solución:* Implementación de un diseño modular en `ContactProfilePanel` con backdrop oscurecido y posicionamiento absoluto/fijo en dispositivos móviles, manteniendo un layout de flexbox adyacente en pantallas de escritorio.

3. **Ciclo de vida en la pantalla animada de carga:**
   * *Desafío:* Evitar fugas de memoria o errores de desmontaje al sincronizar el temporizador de la pantalla de carga con la navegación de React Router.
   * *Solución:* Uso de un hook `useEffect` con limpieza garantizada mediante `clearTimeout`, delegando la persistencia y la navegación al callback `onComplete`.

4. **Navegación directa y recarga de página en producción (Vercel):**
   * *Desafío:* Al recargar rutas profundas del lado del cliente como `/chat/1`, los servidores estáticos devolvían error 404.
   * *Solución:* Incorporación de [vercel.json](file:///c:/Users/Brian/Documents/Curso%20Programacion%20UTN/Trabajo-Practico-Final/vercel.json) con directivas de reescritura hacia `index.html` para habilitar el enrutamiento client-side de React Router DOM.

---

## 💻 Instalación y Ejecución Local

Sigue estos pasos para clonar y ejecutar el proyecto en tu entorno local:

### 1. Clonar el repositorio
```bash
git clone https://github.com/ChavezBrian/Trabajo_Practico_Final_UTN.git
cd Trabajo-Practico-Final
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Iniciar el servidor de desarrollo
```bash
npm run dev
```
La aplicación estará disponible en `http://localhost:5173`.

### 4. Compilar para producción
```bash
npm run build
```

### 5. Previsualizar la compilación de producción
```bash
npm run preview
```

---

## 👥 Datos del Autor

* **Estudiante:** Brian Chavez
* **Carrera / Curso:** Curso de Programación Frontend - UTN (Universidad Tecnológica Nacional)
* **Año:** 2026
