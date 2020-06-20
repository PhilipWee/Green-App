FROM node:12-alpine
WORKDIR /usr/app
COPY . .
RUN npm install
EXPOSE $PORT
CMD [ "node", "./src/app.js" ]