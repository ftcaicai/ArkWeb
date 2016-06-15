var express = require('express');
var router = express.Router();
var dbhelper = require('../code/dbhelper.js')

var gSize = 10
var pageIndex = 0
var sqlParams = [0,10]
var hasPage = false

router.get('/(:page)?', function(req, res, next) {
  dbhelper.open();
    if (!hasPage) {
        pageIndex = 0;
    }
  var op = {sql:"select count(charsid) as c from as_game.tb_character; select * from as_game.tb_character order by `level` desc  limit ?,?;",values:sqlParams, timeout:3000};
  dbhelper.query(op, function (err, results) {
    if (err) throw err;
    res.render('mail', { title: gConfig.title, nav:3, dataTable:"table/mail", table: gTableDesc.character, t: results[1],
        foot: {count: Math.ceil(results[0][0].c / gSize), page:  (pageIndex + 1), url:"/users/" } });
  });
    hasPage = false;
});

router.param('page', function (req, res, next, id) {
    hasPage = true;
  pageIndex = Math.max( parseInt(id) || 0, 1) - 1
  var pageMin = pageIndex  * gSize;
  sqlParams = [pageMin, gSize]
  next();
});

module.exports = router;
