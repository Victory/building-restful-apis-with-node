var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Beer = require('./models/beer')

mongoose.connect('mongodb://localhost:27017/beerlocker');

var app = express();

app.use(bodyParser());

var port = process.env.PORT || 9000;

// a sort of "mini app"
var router = express.Router();

// http://localhost:3000/api
router.get('/', function(req, res) {
  res.json({message: 'Tumbleweeds everywhere'});
});


var beersRoute = router.route('/beers');

// Create endpoint /api/beers for POSTS
beersRoute.post(function(req, res) {

  var beer = new Beer();
  beer.name = req.body.name;
  beer.type = req.body.type;
  beer.quantity = req.body.quantity;

  // validate and save
  beer.save(function(err) {
    if(err) {
      req.send(err);
    }

    res.json({
      message: 'Beer add to the locker!', 
      data: beer
    });
  });
});

beersRoute.get(function(req, res) {
  Beer.find(function(err, beers) {
    if (err) {
      res.send(err);
    }
    res.json(beers);
  });
});

// '/api' is the base dir of the app
app.use('/api', router);

app.listen(port);

console.log('visit: http://localhost:' + port + "/api");
