# What is this?

This is an example of how to use micro frontends with react using a javascript approach.

# Setup

## With docker

If you have docker it is pretty simple, the following command will setup and run all the services for you.

`docker-compose up --build`

## Without docker

By running the `setup` script from the root folder you'll have all the dependencies installed and it will also handle the building of the micro frontends.

`node setup.js`

# Running the app

## With docker

Since you have already setup the services all you need to do is visiting [http://localhost:3000](http://localhost:3000).

## Without docker

If you ran the `setup` script successfully you only have a few more steps to do:

1. Start the `json-server` with running the following command in the `backend` folder

   `json-server --watch db.json --port 3003 --delay 500`

2. Start the app by running `npm start` in the `host-app` directory

Now you should be able to visit [http://localhost:3000](http://localhost:3000) where you'll find the app running.
