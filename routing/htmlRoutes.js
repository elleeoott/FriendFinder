//Dependencies

var path = require("path");

//Export method for users to receive the correct HTML filepath

module.exports = function(app) {

    app.get("/", function(req, res) {

        res.sendFile(path.join(__dirname, "../public/home.html"));
    
    });

    //Send user to survey

    app.get("/survey", function(req, res) {

        res.sendFile(path.join(__dirname, "../public/survey.html"));

    });
};