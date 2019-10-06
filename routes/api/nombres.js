const express = require('express');
const sql = require('mssql');
const router = express.Router();




router.get('/', (req, res) => {
    sql.connect({
        user: 'devils',
        password: 'AlkalinaTID41M',
        server: 'devils.database.windows.net',
        database: 'devils',
        options: {
            encrypt: true
        }
    })
    .then( () => {
        return sql.query(`select * from test`);
    })
    .then( result => {
        res.send(result);
    });

    sql.close();
});


module.exports = router;
