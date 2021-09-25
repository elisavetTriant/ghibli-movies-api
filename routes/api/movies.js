
const express = require("express")

const router = express.Router();

const Movie = require('../../models/movie');

//Get all movies from the database
router.get('/', (req, res) => {

    Movie.find({}, (err, movies) => {
        if (err) {
            // handle error
            res.status(200).json({ error: err.message })
        }

        if (movies.length) {
            res.status(200).json(movies);
        } else {
            // there are no movies
            res.status(200).json({ error: 'No records found in database' })
        }
    })
})

module.exports = router;