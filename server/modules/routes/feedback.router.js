const express = require('express');
const router = express.Router();
const pool = require('../pool.js');



router.get('/', (req, res) => {
    // When you fetch all things in these GET routes, strongly encourage ORDER BY
    // so that things always come back in a consistent order 
    const sqlText = `SELECT * FROM "feedback" ORDER BY "id" DESC;`;
    pool.query(sqlText)
        .then((result) => {
            console.log(`Got feedback from the database`, result);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Good server always responds
        })
})

module.exports = router;