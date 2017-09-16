FROM node:latest

ARG MYSQL_HOST
ENV MYSQL_HOST ${MYSQL_HOST:-mysql}

ARG MYSQL_USER
ENV MYSQL_USER ${MYSQL_USER:-travenas}

ARG MYSQL_PASSWORD
ENV MYSQL_PASSWORD ${MYSQL_PASSWORD:-travenas}

ARG MYSQL_DB
ENV MYSQL_DB ${MYSQL_DB:-travenas}

# Create app directory
WORKDIR /usr/src/app

COPY . .

RUN cd /usr/src/app/backend && npm install
RUN cd /usr/src/app/frontend && npm install && npm run build --prod --env=prod --aot

EXPOSE 3000

CMD [ "node", "/usr/src/app/backend/bin/www" ]