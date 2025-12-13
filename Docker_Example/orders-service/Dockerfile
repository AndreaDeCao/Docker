FROM node:18-alpine

WORKDIR /app

# Copia solo package.json e package-lock.json
COPY package*.json ./

RUN npm install --production

# Copia il resto del progetto
COPY . .

EXPOSE 4002

CMD ["node", "src/app.js"]
