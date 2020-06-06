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
