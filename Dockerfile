FROM node:8.9.1

MAINTAINER RAHUL VARGHESE
WORKDIR /usr/src/app

COPY package.json /usr/src/app
RUN npm install 
COPY . /usr/src/app
EXPOSE 3000
CMD ["npm","start"]
