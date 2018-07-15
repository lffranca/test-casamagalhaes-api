FROM node:8.11.3-alpine

RUN mkdir /app
WORKDIR /app

ADD ${PWD}/package.json /app/package.json

RUN npm install

COPY ${PWD} /app

EXPOSE 3000

CMD [ "npm", "start" ]