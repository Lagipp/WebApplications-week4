const { json } = require('express');
var express = require('express');
var router = express.Router();

let JSONrecipe = "{'name': '', 'instructions': '[]', 'ingredients': '[]'}"


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' } );
});

/* GET food page. */
router.get('/recipe/:food', function(req, res, next) {
  JSONrecipe = {name:req.params.food, instructions:"", ingredients:""}
  //res.json({name:req.params.food, instructions:"", ingredients:""})
  //res.send(JSONrecipe);
  console.log("");
  console.log("The recipe you wanted was: " + req.params.food);
  console.log("in JSON: " + JSONrecipe.name);
  console.log("");

  res.render('recipe', { title: 'debug-test', h1: "debug-name", p: "debug-paragraph" });
  
});


module.exports = router;
