FROM node:14.11.0-alpine
COPY . /users
WORKDIR /users
RUN npm install
RUN npm i -g ts-node
CMD npm run prod