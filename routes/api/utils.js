const express = require("express")
const mongoose = require('../../db/connection'); //connect to db


const router = express.Router();

// Your first API endpoint
router.get('/hello', function (req, res) {
    res.status(200).json({ greeting: 'hello API' });
});

//why not create an endpoint to check availability of DB sever?
router.get("/is-mongoose-connected", function (req, res) {
    if (mongoose) {
        res.status(200).json({ isMongooseConnected: !!mongoose.connection.readyState });
    } else {
        res.status(200).json({ isMongooseConnected: false });
    }
});


module.exports = router;