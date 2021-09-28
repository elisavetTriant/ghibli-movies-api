# Unofficial Ghibli YouTube Videos API

## Overview
This is a sample API runs in the Node.js environment and it's used as a supplementary asset [in this application](https://github.com/elisavetTriant/ghibliapireact). It uses the Express.js framework and pulls data from a MongoDB Atlas database.

## Features / List of the endpoints

### Movies

-   [Movie List - /api/movies](https://ghibli-sample-api.herokuapp.com/api/movies)
-   [Get a specific movie by name - /api/movies/:name](https://ghibli-sample-api.herokuapp.com/api/movies/Princess%20Mononoke)

### Utils

-   [Test if server is running - /api/utils/hello](https://ghibli-sample-api.herokuapp.com/api/utils/hello)
-   [Test if you can connect to DB - /api/utils/is-mongoose-connected](https://ghibli-sample-api.herokuapp.com/api/utils/is-mongoose-connected)

## Running the project

### Available Scripts

Before you can run the app with `npm start` you should install all depedencies (this means also that you have installed Node.js and npm on your machine. Learn how by [reading the docs on downloading and installing Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)). To begin, navigate on the project directory, after you have downloaded or cloned this repository and run:

#### `npm install`

Then, while in the project directory, you can run:

#### `npm run dev`

Runs the app.js (where the server logic lives)
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits, as it runs the nodemon task.
You will also see any errors in the console.

#### `npm start`

Runs the app.js app (where the server logic lives)
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

#### Database setup

1. In order to connect to your database you need a [MongoDB Atlas account](https://www.mongodb.com/cloud/atlas). Refer to [this documentation](https://docs.atlas.mongodb.com/getting-started/) on getting started with MongoDB Atlas. 
2. Rename the .env.sample.txt to .env and input the MONGO_URI string to your specific database. Input your own sample data. The schema is already supplied in the source code, in the models/movies.js

## Dependencies

### App Dependencies

- cors
- dotenv
- express
- mongoose

### Dev Dependencies

- nodemon


## How to get in touch
If you spot any bugs, would like to show me how to make better, or just say hi, contact me at [elissavet.me](https://elissavet.me). Thank you!
