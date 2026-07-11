# Etapa 1: Construcción (Build)
FROM node:20-alpine AS build

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias limpias
RUN npm ci

# Copiar el resto del código
COPY . .

# Construir la aplicación para producción
RUN npm run build

# Etapa 2: Servidor Web (Nginx)
FROM nginx:alpine

# Copiar los archivos construidos desde la etapa anterior al directorio de nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Copiar una configuración personalizada de Nginx para el enrutamiento SPA (React Router)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponer el puerto interno 80 (esto lo lee el reverse proxy)
EXPOSE 80

# Iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
