const mongoose = require('../db/connection'); //connect to db

//Create schema
const Schema = mongoose.Schema;
const movieSchema = new Schema({
    movie_name: {
        type: String,
        unique: true
    },
    movie_youtube_key: {
        type: String,
        unique: true
    }
});

//Creating compound index - schema wide
movieSchema.index({ movie_name: 1, movie_youtube_key: 1 });

//Create model
module.exports = mongoose.model("Movie", movieSchema);