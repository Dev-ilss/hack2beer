const express = require('express');
const sql = require('mssql');
const router = express.Router();


const config = {
    user: 'devils',
    password: 'AlkalinaTID41M',
    server: 'devils.database.windows.net',
    database: 'devils',
    options: {
        encrypt: true
    }
}



router.get('/', (req, res) => {
    //Cambiar el query por procedures
        new sql.ConnectionPool(config).connect().then( pool => {
        return pool.query`select * from Alarms`;
    }).then(result => {
        res.send(result.recordsets[0].filter(item => item.Alarm_type == "Operator intervention").length);
    }).catch(err => console.log(`Error -> ${err}`));
});





sql.close();
module.exports = router;
