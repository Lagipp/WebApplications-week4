const { json } = require('express');
var express = require('express');
var router = express.Router();

let JSONrecipe = "{'name': '', 'instructions': '[]', 'ingredients': '[]'}"


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET food page. */
router.get('/recipe/:food', function(req, res, next) {
  //res.send(req.params.food);
  JSONrecipe = {name:req.params.food, instructions:"", ingredients:""}
  //res.json({name:req.params.food, instructions:"", ingredients:""})
  res.send(JSONrecipe.name);
  console.log("The recipe you wanted was: " + req.params.food);
  console.log("in JSON: " + JSONrecipe.name);
});

module.exports = router;
