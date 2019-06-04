var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
    connections = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    var connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "N*ex7USt",
        database: "gis_request"
    });
};


connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});



module.exports = connection;