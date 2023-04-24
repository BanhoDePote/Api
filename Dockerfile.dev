FROM node:16.15 as server
WORKDIR /app
COPY ./package*.json ./
COPY ./prisma ./prisma
RUN npm install
COPY . .