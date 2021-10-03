const { json } = require('express');
var express = require('express');
var router = express.Router();

let JSONrecipe = "{'name': '', 'instructions': '[]', 'ingredients': '[]'}"


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '== DEBUG: TEST ==' }, {h1: 'food name'}, {p: 'ingredients, recipe'} );
});

/* GET food page. */
router.get('/recipe/:food', function(req, res, next) {
  JSONrecipe = {name:req.params.food, instructions:"", ingredients:""}
  //res.json({name:req.params.food, instructions:"", ingredients:""})
  res.send(JSONrecipe);
  console.log("");
  console.log("The recipe you wanted was: " + req.params.food);
  console.log("in JSON: " + JSONrecipe.name);
  console.log("");

  //res.render('index', { title: '== DEBUG: TEST ==' }, {h1: JSONrecipe.name}, {p: JSONrecipe.instructions + JSONrecipe.ingredients})
});


module.exports = router;
