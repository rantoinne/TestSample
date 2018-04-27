var express = require('express');
var bodyparser = require('body-parser');
var expressValidator = require('express-validator');
var routes = require('./routes');
var app = express();
app.use(bodyparser.urlencoded({extended: true}));
app.use(expressValidator());
app.use(bodyparser.json());

var server = app.listen(8000, function() {
  console.log('Server listening on port ' + server.address().port);
});

app.post('/save_chat/', function(req, res) {
	    console.log("asfddfege");
		console.log(req);
        res.send({status:200 ,msg:'hi'});
		res.end();
    });
