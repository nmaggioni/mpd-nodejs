var express = require('express');
var app = express();
app.set('views', './views');
app.set('view engine', 'jade');
var mpd = require('mpd');
var cmd = mpd.cmd;
var mpd_client = mpd.connect({
  port: 6600,
  host: 'localhost',
});

mpd_client.on('ready', function() {
  console.log("MPD bridge ready");
});

//app.post('/', function (req, res) {
//  res.send('Got a POST request');
//  console.log("Got a POST on /");
//});

app.use('/', require('./routes/index.js'));
app.use('/about', require('./routes/about.js'));
app.use('/player', require('./routes/player.js'));

var server = app.listen(8080, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
