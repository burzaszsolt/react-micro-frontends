# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /data

# copy db
COPY db.json .

# install json-server
RUN npm install -g json-server

# start app
CMD ["json-server", "/data/db.json", "-H", "0.0.0.0", "--port", "3003", "--delay", "500"]