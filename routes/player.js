var express = require('express');
var app = express();
var mpd = require('mpd');
var cmd = mpd.cmd;
var mpd_client = mpd.connect({
  port: 6600,
  host: 'localhost',
});

mpd_client.on('ready', function() {
  console.log("MPD bridge ready (Player page)");
});

module.exports = function (){
    var router = express.Router();
    router.get('/', function (req, res) {
        if (req.query.cmd == "play") {
            console.log("Issuing PLAY...");
		mpd_client.sendCommand(cmd("play", []), function(err, msg) {
		    if (err) throw err;
		    console.log(msg);
		});
        } else if (req.query.cmd == "stop") {
            console.log("Issuing STOP...");
		mpd_client.sendCommand(cmd("stop", []), function(err, msg) {
		    if (err) throw err;
		    console.log(msg);
		});
        } else if (req.query.cmd == "prev") {
            console.log("Issuing PREVIOUS...");
		mpd_client.sendCommand(cmd("previous", []), function(err, msg) {
		    if (err) throw err;
		    console.log(msg);
		});
        } else if (req.query.cmd == "next") {
            console.log("Issuing NEXT...");
		mpd_client.sendCommand(cmd("next", []), function(err, msg) {
		    if (err) throw err;
		    console.log(msg);
		});
	};
        res.render('player');
    });
    return router;
}();
