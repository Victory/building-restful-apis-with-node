var express = require('express');

var app = express();

var port = process.env.PORT || 9000;

// a sort of "mini app"
var router = express.Router();

// http://localhost:3000/api
router.get('/', function(req, res) {
  res.json({message: 'Tumbleweeds everywhere'});
});


// '/api' is the base dir of the app
app.use('/api', router);

app.listen(port);

console.log('visit: http://localhost:' + port + "/api");
