// Dependencies

var path = require("path");

//Export method required for app functionality

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {

        res.json(variable);
    });

    app.post("/api/friends", function(req, res) {

        variable.push(req.body);
    });
};
