const express = require('express');
const pool = require('../modules/pool')

const router = express.Router();

//return all movies
router.get('/', (req, res) => {
    let queryString = `SELECT * FROM "movies";`;
    pool.query(queryString).then(result => {
        res.send(result.rows);
    }).catch(error => {
        console.log('Error getting movies from the database: ', error);
        res.sendStatus(400)
    })
});



module.exports = router;