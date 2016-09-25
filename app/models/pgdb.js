var pg = require("pg");
var config = require('../config.json');
var conString = config.conString;

module.exports = {
getClue: function(res){
    var results = [];

    pg.connect(conString, function(err, client, done) {
        if(err) {
          done();
          console.log(err);
          return res.status(500).json({ success: false, data: err});
        }

        var query = client.query("SELECT clue, name as category FROM wisielec.\"Clues\" cl join wisielec.\"Categories\" ca on cl.\"categoryId\" = ca.Id");
        query.on('row', function(row) {
            results.push(row);
        });

        query.on('end', function() {
            done();
            return res.json(results);
        });

    });
    }

};


