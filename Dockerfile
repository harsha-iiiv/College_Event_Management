FROM node:12

RUN mkdir -p /usr/src 

WORKDIR /usr/src 

COPY package.json /usr/src

COPY package-lock.json ./usr/src


RUN npm install

EXPOSE 8000 

CMD ["npm", "start"]