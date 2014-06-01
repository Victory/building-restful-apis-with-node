var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var beerController = require('./controllers/beer');
var userController = require('./controllers/user');
var authController = require('./controllers/auth');

mongoose.connect('mongodb://localhost:27017/beerlocker');

var app = express();

app.use(bodyParser());

var port = process.env.PORT || 9000;

// a sort of "mini app"
var router = express.Router();

router.route('/users')
  .post(userController.postUsers)
  .get(userController.getUsers);

router.route('/beers')
  .post(beerController.postBeers)
  .get(beerController.getBeers);

router.route('/beers/:beer_id')
  .get(beerController.getBeer)
  .put(beerController.putBeer)
  .delete(beerController.deleteBeer);

// '/api' is the base dir of the app
app.use('/api', router);

app.listen(port);

console.log('visit: http://localhost:' + port + "/api");
