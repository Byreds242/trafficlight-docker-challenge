# Imagen base
FROM node:14

# Crear directorio de la app
WORKDIR /app

# Copiar archivos de la app
COPY . .

# Instalar dependencias
RUN npm install

# Exponer el puerto 5000
EXPOSE 5000

# Comando para iniciar la app
CMD ["npm", "start"]
