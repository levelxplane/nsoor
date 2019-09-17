FROM node:12

COPY . /srv/nsoor

EXPOSE 8080

WORKDIR /srv/nsoor
RUN npm install
CMD node app.js
