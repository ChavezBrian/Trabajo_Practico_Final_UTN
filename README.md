# Trabajo Práctico Final - Frontend (UTN)

## 📌 Descripción del Proyecto

Este proyecto es una aplicación web de mensajería interactiva inspirada en la interfaz de **Discord**, ambientada temáticamente en el universo de **Grand Theft Auto: San Andreas**.

Permite a los usuarios iniciar sesión mediante un formulario validado, visualizar la lista de contactos con sus respectivos estados de presencia (*online*, *idle*, *dnd*, *offline*), filtrar amigos por estado y por nombre utilizando parámetros de búsqueda en la URL, y mantener conversaciones directas con persistencia local en el navegador.

---

## 🚀 Enlaces de Entrega

* **Repositorio de GitHub:** [https://github.com/TU_USUARIO/TU_REPOSITORIO](https://github.com/) *(Actualizar con el enlace correspondiente)*
* **Despliegue en Producción (Vercel):** [https://tu-proyecto.vercel.app](https://vercel.com/) *(Actualizar con el enlace correspondiente)*

---

## 🛠️ Tecnologías y Librerías Utilizadas

* **[React 19](https://react.dev/):** Biblioteca principal para la construcción de interfaces declarativas basadas en componentes.
* **[React Router DOM v7](https://reactrouter.com/):** Enrutamiento del lado del cliente, navegación dinámica (`useNavigate`) y parámetros de ruta dinámicos (`useParams`).
* **[Vite](https://vitejs.dev/):** Entorno de desarrollo rápido y empaquetador para producción.
* **Vanilla CSS (CSS3):** Estilos modulares, diseño responsivo con Flexbox, variables CSS y diseño temático oscuro inspirado en Discord.
* **Web Storage API (`localStorage`):** Persistencia persistente de la sesión del usuario y del historial de mensajes y contactos.

---

## 🏗️ Arquitectura y Separación de Responsabilidades

El proyecto implementa una separación limpia entre la capa de presentación (componentes) y la lógica de negocio a través de **Context API** y **Custom Hooks**:

### 1. Contextos (`src/contexts/`)
* **`AuthContext`:** Administra el estado global de autenticación del usuario (`currentUser`), funciones de inicio de sesión (`login`) y cierre de sesión (`logout`).
* **`ContactContext`:** Gestiona el estado de los contactos y mensajes, exponiendo acciones de dominio (`sendMessage`, `markMessagesAsSeen`) y sincronización automática.

### 2. Custom Hooks (`src/hooks/`)
* **`useLoginForm`:** Controla el estado del formulario de inicio de sesión, límites de caracteres y validaciones de datos (nombre, email y contraseña).
* **`useChat`:** Encapsula la lógica de interacción de un chat específico según el parámetro de ruta `contactId`: búsqueda del contacto, marcado de mensajes leídos y envío de nuevos mensajes.
* **`useContactFilter`:** Aísla la lógica de filtrado de amigos por pestaña (`online` / `all`) y por texto de búsqueda, manteniendo el componente `HomeScreen` limpio y declarativo.
* **`useLocalStorage`:** Hook genérico y reutilizable para sincronizar estado de React de forma segura con `localStorage` utilizando bloques `try/catch`.

---

## 📱 Responsividad y Accesibilidad

* **Responsividad (320px a 2000px):**
  * En pantallas de escritorio (`> 768px`), la barra lateral de mensajes directos y el área de contenido principal se muestran simultáneamente en un layout persistente.
  * En dispositivos móviles (`<= 768px`), la interfaz alterna de forma fluida entre la navegación de contactos y la conversación activa a pantalla completa.
* **Accesibilidad (A11y):**
  * Contraste de colores testeado para garantizar legibilidad (tema oscuro con textos claros).
  * Formularios accesibles con etiquetas `<label>` vinculadas mediante `htmlFor` e `id`.
  * Atributos `aria-label` en inputs de búsqueda y botones con iconos.
  * Atributos `alt` descriptivos en imágenes y avatares de contactos.

---

## 💡 Dificultades Presentadas y Soluciones

1. **Persistencia de estado bidireccional:**
   * *Desafío:* Mantener los mensajes enviados por el usuario y los cambios de lectura entre recargas de página sin un backend en tiempo real.
   * *Solución:* Se abstrajo la lógica de guardado y lectura mediante el custom hook `useLocalStorage` integrado dentro de `ContactContextProvider`.
2. **Navegación dinámica por parámetros de ruta:**
   * *Desafío:* Permitir que la selección de cualquier contacto cargue automáticamente su historial y actualice la URL sin recargar la aplicación.
   * *Solución:* Configuración de rutas dinámicas `/chat/:contactId` en React Router y consumo mediante `useParams` dentro del hook `useChat`.
3. **Comportamiento responsivo estilo Discord en móviles:**
   * *Desafío:* Permitir una navegación cómoda en pantallas pequeñas sin perder el acceso a la pantalla de amigos.
   * *Solución:* Adaptación de `AppLayout` para alternar entre el sidebar, la pantalla de amigos y la pantalla de chat en base a las rutas y parámetros de búsqueda.

---

## 💻 Instalación y Ejecución Local

1. **Clonar el repositorio:**
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd Trabajo-Practico-Final
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

4. **Compilar para producción:**
   ```bash
   npm run build
   ```
