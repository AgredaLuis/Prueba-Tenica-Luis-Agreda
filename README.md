# Prueba Técnica - Luis Agreda

Este proyecto es una prueba técnica desarrollada con **React**, **TypeScript**, y **Vite**, utilizando **Tailwind CSS** como framework de estilos. La aplicación incluye manejo de formularios con **React Hook Form**, integración con APIs externas, y un flujo de login con gestión de estado global.

## Tabla de Contenidos

- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Pantallas de la Aplicación](#Pantallas-de-la-Aplicación)
- [Tecnologías Utilizadas](#Tecnologías-Utilizadas)


---

## Requisitos

Antes de comenzar, asegúrate de tener instalados los siguientes programas:

- [Node.js](https://nodejs.org/) (versión 16 o superior recomendada)
- [Git](https://git-scm.com/)

---

## Instalación

Sigue los pasos a continuación para configurar el proyecto en tu máquina local:

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/AgredaLuis/Prueba-Tenica-Luis-Agreda.git

2. **Accede al directorio del proyecto:**

   ```bash
   cd Prueba-Tenica-Luis-Agreda

3. **Instala las dependencias:**

     ```bash
     npm install

4. **Inicia el servidor de desarrollo:**

     ```bash
     npm run dev


## Pantallas de la Aplicación

El proyecto incluye tres pantallas principales:

### 1. **Home**
- Es la página de inicio que contiene la sección principal (Hero Section) y otros elementos destacados.
- Diseño atractivo y responsivo, adaptado para dispositivos móviles y escritorio.

### 2. **Login**
- Pantalla donde los usuarios pueden iniciar sesión.
- Incluye un formulario que valida:
  - **Email**: Debe ser un correo válido.
  - **Contraseña**: Campo obligatorio.
- Al enviar el formulario, se realiza una solicitud POST a la API `https://reqres.in/api/login` con los datos proporcionados.
- Requisitos para un login exitoso:
  - **Email**: `eve.holt@reqres.in`
  - **Contraseña**: `cityslicka`
- Si los datos son correctos:
  - La API devuelve un token.
  - El token se guarda en el Context API del proyecto para su uso posterior.
- Si hay un error, se muestra un mensaje indicando el problema.

### 3. **404**
- Página de error que aparece cuando un usuario intenta acceder a una ruta no existente.
- Contiene un diseño simple e informativo, junto con un botón para regresar al Home.

---

### Flujo de Navegación

- Los usuarios que no han iniciado sesión correctamente serán redirigidos al formulario de **Login**.
- Una vez que el usuario inicia sesión, podrá acceder al contenido protegido o seguir navegando en la aplicación.


## Tecnologías Utilizadas

- **Vite**: Herramienta de desarrollo rápido para aplicaciones modernas de frontend.
- **React 18**: Librería para construir interfaces de usuario.
- **TypeScript**: Superset de JavaScript para un desarrollo más robusto.
- **Tailwind CSS**: Framework para el diseño responsivo y utilitario.
- **React Hook Form**: Manejo de formularios con validaciones.
- **Context API**: Gestión de estado global.

