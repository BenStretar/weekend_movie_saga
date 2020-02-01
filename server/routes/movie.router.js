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


// Get specific movie details from click
router.get(`/:id`, (req, res)=>{
    const id = [req.params.id]
    let queryString = `
    SELECT "id", "title", "description" FROM "movies"
    WHERE id=$1;`;
    pool.query(queryString, id).then(result =>{
        res.send(result.rows);
    }).catch(error =>{
        console.log('---------Error getting movie id---------', error);
        res.sendStatus(400)
    });
})

//edit movies and update database
router.put(`/:id`, (req, res)=>{
    const id = req.params.id
    let title = req.body.title;
    let description = req.body.description;
    let queryString = `
    UPDATE "movies" SET "title"=$1, "description"=$2 
    WHERE id=$3;`;
    pool.query(queryString, [title, description, id]).then(result =>{
        res.sendStatus(200);
    }).catch(error=>{
        console.log('Error updating selected movie', error);
        res.sendStatus(400)
    });
}) 



module.exports = router;