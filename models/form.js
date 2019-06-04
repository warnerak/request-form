// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var request = {
    all: function (cb) {
        orm.all("requests", function (res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    create: function (cols, vals, cb) {
        console.log("i am in the form.js folder");
        orm.create("requests", cols, vals, function (res) {
            cb(res);
        });
    },
    update: function (objColVals, condition, cb) {
        orm.update("requests", objColVals, condition, function (res) {
            cb(res);
        });
    },

    delete: function (condition, cb) {
        orm.delete("requests", condition, function (res) {
            cb(res);
        });
    }
};

module.exports = request;
