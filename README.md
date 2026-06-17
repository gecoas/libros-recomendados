# libros-recomendados

Aplicacion web sencilla para publicar recomendaciones de libros organizadas por temas.

## Stack

- Next.js (App Router)
- TypeScript
- CSS global sin framework adicional
- Docker multi-stage (modo standalone)
- Despliegue con `deploy-project`

## Estructura

- `src/app/`: rutas y vistas de Next.js.
- `public/`: activos estaticos.
- `Dockerfile`: build multi-stage para produccion.
- `docker-compose.prod.yml`: despliegue productivo.
- `.env.example`: variables base del proyecto.

## Desarrollo local

1. Instalar dependencias:

   `npm install`

2. Levantar entorno de desarrollo:

   `npm run dev`

3. Probar endpoint de salud:

   `http://localhost:3000/health`

## Variables de entorno

Copiar `.env.example` como base del entorno de produccion en:

`/opt/proyectos/libros-recomendados/shared/.env`

Variables principales:

- `COMPOSE_PROJECT_NAME=libros-recomendados`
- `APP_PORT=8096`
- `APP_VERSION=latest`
- `APP_URL=https://libros-recomendados.gecoas.es`

## Flujo de despliegue

1. Desarrollo en Ubuntu:

   `/opt/workspaces/libros-recomendados`

2. Produccion:

   `/opt/proyectos/libros-recomendados/current`

3. Despliegue:

   `deploy-project libros-recomendados`

## Reglas operativas

- No modificar produccion directamente.
- No subir archivos `.env` a Git.
- Revisar siempre `git status` y `git diff`.
- Hacer commit y push antes de desplegar.
