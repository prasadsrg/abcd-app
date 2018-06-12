FROM node:carbon
ADD . /code
WORKDIR /code
EXPOSE 8080
RUN npm install
RUN npm install express
RUN npm run build --prod --aot
ENTRYPOINT ["node", "server.js"]
