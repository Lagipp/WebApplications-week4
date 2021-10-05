const { json } = require('express');
var express = require('express');
var router = express.Router();


let JSONrecipe = {'name': '', 'instructions': ['fry the bacon', 'scramble the eggs'], 'ingredients': ['2 eggs', '4 strips of bacon']};


/* GET index page. */

router.get('/', function(req, res, next) {
  res.render('recipe', { title: 'epic recipe', h1: "h1", p: "PARAGRAFI" } );
    

});

/* GET food page. */
router.get('/recipe/:food', function(req, res, next) {
  JSONrecipe.name = req.params.food
  //res.json({name:req.params.food, instructions:"", ingredients:""})
  res.send(JSONrecipe);
  console.log("");
  console.log("--DEBUG: The recipe you wanted was: " + req.params.food);
  console.log("--DEBUG: in JSON: " + JSONrecipe.name);
  console.log("");

});


module.exports = router;
