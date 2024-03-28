FROM ubuntu

RUN apt update  -y
RUN apt install nodejs nginx npm   -y
RUN apt install curl vim  systemctl -y
RUN npm install pm2 -g
COPY ./docker/default.conf /etc/nginx/sites-enabled/default
COPY . ./app
WORKDIR /app

EXPOSE 9000
