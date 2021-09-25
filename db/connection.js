const mongoose = require('mongoose');
require('dotenv/config');

const DB = process.env['MONGO_URI'];

//Connect to the db
try {
    // Connect to the MongoDB cluster
    mongoose.connect(
        DB,
        { useNewUrlParser: true, useUnifiedTopology: true },
        () => console.log("Mongoose is connected")
    );

} catch (e) {
    console.log("Mongoose could not connect to DB");
}

module.exports = mongoose;