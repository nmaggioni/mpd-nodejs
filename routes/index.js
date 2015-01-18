var express = require('express');
var app = express();

module.exports = function (){
    var router = express.Router();
    router.get('/', function (req, res) {
        res.render('index', {
            title: "MPD Web Controller"
        });
    });
    return router;
}();