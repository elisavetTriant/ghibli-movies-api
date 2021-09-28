
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

//Get movie detail info - req param movie name
router.get('/:name', (req, res) => {
    const { name } = req.params;
    Movie.findOne({ movie_name: name })
        .then(movie => {
            if (!movie) { throw new Error('Movie not found in database'); }
            res.status(200).json(movie);
        })
        .catch(err => res.status(200).json({ error: err.message }));
})

module.exports = router;