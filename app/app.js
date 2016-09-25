var express = require('express');
var app = express();
var pgdb = require('./models/pgdb.js');

app.get('/m1/clues', function(req, res) {
       pgdb.getClue(res);
});

app.use(express.static('app'));
app.get('/', function(req, res) {
    res.sendfile('./index.html');
});

app.listen(5000);
