FROM node:lts-alpine
COPY dist /app
COPY package*.json /app/
WORKDIR /app
RUN npm ci --omit=dev
EXPOSE 3000
ENTRYPOINT ["node", "src/main.js"]
