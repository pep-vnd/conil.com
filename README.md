# Conil.com - Portal Turístico (MVP)

Este proyecto es un portal turístico estático desarrollado con React (Next.js), TypeScript y Tailwind CSS. Está optimizado para ser rápido, seguro y económico de alojar en cualquier hosting compartido (cPanel, Hostinger) mediante subida de archivos estáticos.

## Tecnologías
- **Core**: Next.js 15 (App Router)
- **Estilos**: Tailwind CSS
- **Modo**: Static Site Generation (SSG) - `output: 'export'`
- **Datos**: Archivos locales en `src/data` (Sin base de datos compleja)

## Requisitos Previos
- Node.js 18 o superior instalado.

## Instalación

Instala las dependencias del proyecto:

```bash
npm install
```

## Desarrollo Local

Para ver el proyecto en tu ordenador mientras desarrollas:

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Generar Versión para Producción (Hosting)

Esta es la parte más importante. Para subir la web a tu hosting:

1. Ejecuta el comando de construcción:
   ```bash
   npm run build
   ```
2. Este comando creará una carpeta llamada `out` en la raíz del proyecto.
3. La carpeta `out` contiene todos los archivos HTML, CSS, JS e imágenes optimizados.

## Despliegue (FTP a Hostinger/cPanel)

1. Abre tu cliente FTP (FileZilla) o el Administrador de Archivos de tu hosting.
2. Navega a la carpeta pública de tu dominio (usualmente `public_html` o `www`).
3. **Sube TODO el contenido de la carpeta `out` al servidor.**
   - Asegúrate de subir los archivos *dentro* de `out`, no la carpeta `out` en sí misma (a menos que quieras que la web sea visible en `tudominio.com/out`).
   - El archivo `index.html` debe quedar en la raíz de `public_html`.

## Estructura de Datos (Cómo editar contenido)

Para añadir hoteles, experiencias o categorías, edita los archivos en `src/data`:
- `src/data/places.ts`: Hoteles y Restaurantes.
- `src/data/experiences.ts`: Actividades y experiencias.
- `src/data/categories.ts`: Categorías del menú principal.

Los cambios requieren ejecutar `npm run build` de nuevo para reflejarse en producción.
