# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Docker

In order to be able to perform the measurements regarding the energy efficiency of this web application, it is 
necessary to run the individual components as independent [Docker](https://docs.docker.com/get-docker/) images. The following commands are available for 
this purpose:

`docker build -t reactimage:dev -f Dockerfile.dev .`

Creates docker image in the development mode.

`docker build -t reactimage:prod -f Dockerfile.prod .`

Creates docker image in the production mode.

`docker run -it --rm -p 3000:80 -d reactimage:prod`

Runs the production image / app on port 3000. You may use `reactimage:dev` instead of `reactimage:prod` in order to run the image / 
app in development mode.

## Docker Compose

Docker Compose is a tool by Docker that allows to handle multiple container setups. This is necessary for this 
project in order to measure the energy consumption for all components that are part of the web application. Since we 
build in the Docker section our own web server that provides the client with data we also need to take the client 
side into account.

`docker-compose up -d`

Run all images (client/server)

`docker-compose ps`

Show all images (client/server)

`docker-compose kill`

Turn off all images (client/server)
