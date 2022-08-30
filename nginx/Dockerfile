FROM nginx:latest

WORKDIR /app

RUN apt-get update && \
    apt-get install vim -y

COPY html /usr/share/nginx/html

#ENTRYPOINT [ "echo", "Hello Docker!!!" ]

#CMD [ "echo", "Hello Docker!" ]

ENTRYPOINT ["/docker-entrypoint.sh"]

CMD ["nginx", "-g", "daemon off;"]
