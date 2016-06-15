var mysql      = require('mysql');
require("./../config/db")

var dbhelper = {
	isOpen : false,
	conn :null,
	open:function(){
		console.log("dbhelper.open");
		console.log(db);
		if (this.isOpen)  {
			return true;
		}
		this.conn = mysql.createConnection(db);
		this.conn.connect();
		this.isOpen = true;
		return true;
	},
	query: function(op, cb) {
		if (this.isOpen) {
			
			console.log(op);
			this.conn.query(op, cb);
		}
		else {
			cb("db hasn't open", null, null);
		}
	},
	close:function(){
		if (this.isOpen) {
			this.conn.end();
		}
	}
};

module.exports = dbhelper;

/*
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
*/