const express = require('express');
const pool = require('../modules/pool')

const router = express.Router();

//return all genres
router.get('/:id', (req, res) => {
    const id = [req.params.id]
    let queryString = `
        SELECT "genres"."name"
        FROM "movies"
        JOIN "movie_genre" ON "movie_genre"."movies_id" = "movies"."id"
        JOIN "genres" ON "genres"."id" = "movie_genre"."genres_id"
        WHERE "movies"."id" =$1;`;
    pool.query(queryString, id).then(result => {
        res.send(result.rows);
    }).catch(error => {
        console.log('Error getting genres from the database: ', error);
        res.sendStatus(400)
    })
})

module.exports = router;
