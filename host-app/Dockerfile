# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# microfrontend envs
ENV REACT_APP_PRODUCTS_MICROFRONTEND_URL http://localhost:3001/dist/mf-products.js
ENV REACT_APP_CART_MICROFRONTEND_URL http://localhost:3002/dist/mf-cart.js

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm ci

# add app
COPY . ./

# start app
CMD ["npm", "start"]