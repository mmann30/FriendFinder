// Node dependencies
var path = require('path');


// Local dependencies
var surveyResults = require("../data/friends.js");

module.exports = function(app) {
    
    app.get('/api/friends', function(req, res) {
        res.json(surveyResults);
    });
    // change pathway to survey.html to collect form data
    app.post('/api/friends', function(req, res) {
        
    });
};