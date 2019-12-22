const express = require('express');
const pool = require('../modules/pool')

const router = express.Router();

//return all genres
router.get('/', (req, res) => {
    let queryString = `SELECT * FROM "genres";`;
    pool.query(queryString).then(result => {
        res.send(result.rows);
    }).catch(error => {
        console.log('Error getting genres from the database: ', error);
        res.sendStatus(400)
    })
})

module.exports = router;