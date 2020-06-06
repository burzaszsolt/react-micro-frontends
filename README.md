# What is this?

This is an example of how to use micro frontends with react using a javascript approach.

# Setup

## With docker

If you have docker it is pretty simple, the following command will setup and run all the services for you.

`docker-compose up --build`

## Without docker

By running the `setup` script from the root folder you'll have all the dependencies installed and it will also build the micro frontends. Once everything is in place the script will start the `json-server` and the `host-app` for you.

`node setup.js`

# Running the app

With both setup options you should be able to visit [http://localhost:3000](http://localhost:3000) where you'll find the app running.

# Parts

## The host-app

It is a React application that wants to be a french bulldog accessory webshop. This one is the responsible for rendering the micro frontends as well.

## Products micro frontend

As it's name implies this tiny React app displays some products in a form of small cards with nice images. The user can add a product to the cart or increase their number by adding them again.

## Cart micro frontend

This one is a small React app that renders a list of products in cart. The user can delete them or modify their number.

## Backend

The backend is a fake REST API created with the `json-server` package. The database consists of products and cart.