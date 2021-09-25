const express = require('express');
const cors = require('cors');
require('dotenv/config');

const app = express();

//Middleware
// render the stylesheet as found in the public folder
app.use(express.static(__dirname + '/public'));

//No need for body-parser in this version of express
//use this instead
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
app.use(cors({ optionsSuccessStatus: 200 }));  // some legacy browsers choke on 204


//Adding routes
const utilsRoute = require('./routes/api/utils');
app.use('/api/utils', utilsRoute);

const moviesRoute = require('./routes/api/movies');
app.use('/api/movies', moviesRoute);

//Adding Routes
app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
    console.log('Your app is listening on port ' + listener.address().port);
});