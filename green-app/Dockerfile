FROM node:18
WORKDIR /app
COPY app-green.js .
RUN npm init -y && npm install express
CMD ["node", "app-green.js"]
