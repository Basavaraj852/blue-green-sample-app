FROM node:18
WORKDIR /app
COPY app-blue.js .
RUN npm init -y && npm install express
CMD ["node", "app-blue.js"]
