var express = require("express");
var router = express.Router();


var request = require("../models/form.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    request.all(function (data) {
        var hbsObject = {
            requests: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/requests", function (req, res) {
    request.create([
        "gis_analyst", "project_manager", "project_priority", "date_submitted", "due_date", "project_name", "project_number", "latitude", "longitude", "notes_comments", "map_requested", "active_archive"
    ], [
            req.body.gis_analyst, req.body.project_manager, req.body.project_priority, req.body.date_submitted, req.body.due_date, req.body.project_name, req.body.project_number, req.body.latitude, req.body.longitude, req.body.notes_comments, req.body.map_requested, req.body.active_archive
        ], function (result) {
            res.json({ id: result.insertId });
        });
});

router.put("/api/requests/:project_number", function (req, res) {
    var condition = "Project Number = " + req.params.project_number;

    console.log("condition", condition);

    request.update({
        active_archive: req.body.active_archive
    }, condition, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/requests/:project_number", function (req, res) {
    var condition = "Project Number = " + req.params.project_number;

    request.delete(condition, function (result) {
        if (result.affectedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;