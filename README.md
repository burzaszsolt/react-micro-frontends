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

If you ran the `setup` script successfully you are one step away from running the app. In the root folder there is another script called `run.js`. It will start the `json-server` and the `host-app` if you execute `node run.js` in the root directory.

Now you should be able to visit [http://localhost:3000](http://localhost:3000) where you'll find the app running.
