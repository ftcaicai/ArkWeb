var express = require('express');
var router = express.Router();
var dbhelper = require('../code/dbhelper.js')

/* GET home page. */
router.get('/', function(req, res, next) {
    dbhelper.open();
    var op = {sql:"SELECT * FROM notify;", timeout:3000};
    dbhelper.query(op, function(err, rows, fields){
        if (err) throw err;
        res.render('mail', { title: gConfig.title, nav:1, dataTable:"table/mail", t: rows, table: gTableDesc.mail });
    });
});

module.exports = router;