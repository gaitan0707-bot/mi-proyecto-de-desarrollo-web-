# mi-proyecto-de-desarrollo-web-

Este repositorio contiene un proyecto con una API en Node.js/TypeScript y una aplicación web en Python/Django.

## Estructura del proyecto

- `api/`: backend con Express y TypeScript
- `web/`: frontend Django
- `docker-compose.yml`: orquestación de contenedores
- `README.md`: documentación del proyecto

## Ejecutar la API localmente

1. Ve a la carpeta del proyecto:
   ```powershell
   cd "c:\Users\gaita\OneDrive\Desktop\mi-proyecto\mi-proyecto"
   ```
2. Instala dependencias:
   ```powershell
   npm install
   ```
3. Ejecuta en modo desarrollo:
   ```powershell
   npm run dev
   ```

## Ejecutar el proyecto con Docker

1. Asegúrate de tener Docker instalado.
2. Ejecuta:
   ```powershell
   docker-compose up --build
   ```

## GitHub

- Repositorio remoto: `https://github.com/gaitan0707-bot/mi-proyecto-de-desarrollo-web-.git`

## Notas

- Asegúrate de que la base de datos MySQL esté configurada y disponible si usas la API.
- El frontend Django usa `web/requirements.txt` para dependencias.
