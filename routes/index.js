var express = require('express');
var router = express.Router();

let JSONrecipe = "{'name': '', 'instructions': '[]', 'ingredients': '[]'}"


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET food page. */
router.get('/recipe/:food', function(req, res, next) {
  res.send(req.params.food);
  //console.log(req.params.food);
});

module.exports = router;
