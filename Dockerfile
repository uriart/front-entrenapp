# Etapa de construcción
FROM node:16-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Etapa de producción
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY --from=build /app/dist/entrenapp /usr/share/nginx/html

#COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80