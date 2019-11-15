FROM node:12-alpine 

RUN mkdir -p /usr/src/server_app 

WORKDIR /usr/src/server_app 

COPY package*.json /usr/src/server_app

RUN npm install

EXPOSE 8000 

CMD ["npm", "start"]