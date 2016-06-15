var mysql      = require('mysql');
require("./../config/db")

var connection = mysql.createConnection(db);
 
connection.connect();
 
var op = {sql:"SELECT * FROM notify WHERE id = ?;", timeout:3000, values:['85']};
connection.query(op, function(err, rows, fields) {
  if (err) throw err;
 	//console.log(fields)
 	rows.forEach(function(e){
 		console.log(e.money)
 	});

});
 
connection.end();
