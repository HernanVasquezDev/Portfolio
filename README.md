# Portfolio Personal

Este proyecto es un portfolio personal construido con **React**, **TypeScript** y **Vite**. Incluye secciones de presentación, experiencia, educación, habilidades, proyectos y contacto.

## Tecnologías principales

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Icons
- PrimeReact + PrimeIcons
- React Intersection Observer

## Estructura del proyecto

- `src/App.tsx` - Entrada principal de la aplicación.
- `src/main.tsx` - Inicializa React y monta la aplicación.
- `src/components/layout/` - Componentes de layout como `Navbar`, `Footer`, `AnimatedLogo`, `ScrollToTop` y `WhatsappButton`.
- `src/components/sections/` - Secciones de la página: `Hero`, `About`, `Skills`, `Projects`, `Experience`, `Education`, `Contact`.
- `src/components/ui/` - Componentes reutilizables como `ProjectCard`, `SectionTitle`, `StackScrollController` y `TextUI`.
- `src/hooks/useScrollAnimation.ts` - Hook para animaciones al hacer scroll.
- `src/types/` - Tipos TypeScript para datos del proyecto.

## Requisitos

- Node.js 18+ recomendado
- npm

## Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/Portfolio.git
cd Portfolio
```

2. Instala dependencias:

```bash
npm install
```

## Uso local

Para ejecutar el proyecto en modo de desarrollo:

```bash
npm run dev
```

Después de iniciar, abre la URL que muestre Vite (normalmente `http://localhost:5173`).

## Construcción para producción

Para compilar el proyecto y generar los archivos listos para producción:

```bash
npm run build
```

## Vista previa de producción

Para previsualizar la versión de producción localmente:

```bash
npm run preview
```

## Linter

Para ejecutar ESLint en todo el proyecto:

```bash
npm run lint
```

## Despliegue

Puedes desplegar este proyecto en cualquier servicio estático compatible con archivos de salida de Vite, por ejemplo:

- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages
- Surge

### Pasos generales de despliegue

1. Ejecuta `npm run build`.
2. Sube la carpeta `dist` al servicio de hosting.
3. Configura la ruta base si tu deploy no está en la raíz del dominio.

## Contacto

Puedes usar la sección de contacto del propio portfolio para recibir mensajes o actualizar la información personal en `src/components/sections/Contact.tsx`.

---

> Nota: Si agregas un backend propio, puedes extender el despliegue con servidores como Express o funciones serverless, pero la versión actual es principalmente frontend con React + Vite.