const { json } = require('express');
var express = require('express');
const { response } = require('../app');
var router = express.Router();


let JSONrecipe = {'name': '', 'instructions': ['fry the bacon', 'scramble the eggs'], 'ingredients': ['2 eggs', '4 strips of bacon']};

// let JSONanother = {'name': '', 'instruction': [], 'ingredients': []};


/* GET index page. */
router.get('/', function(req, res, next) {
  res.render('recipe', { title: 'epic recipe', h1: "h1" } );
  
});


/* GET food page. */
router.get('/recipe/:food', function(req, res, next) {
  JSONrecipe.name = req.params.food
  res.send(JSONrecipe);
  /*
  console.log("");
  console.log("--DEBUG: The recipe you wanted was: " + req.params.food);
  console.log("--DEBUG: in JSON: " + JSONrecipe.name);
  console.log("");
  */
});


/* GET recipe page */
router.get('/recipe', function(req, res, next) {
  // console.log("--DEBUG: typeof 'req': " + typeof req);
  // console.log("--DEBUG: typeof 'req.body': " + typeof req.body);
  // console.log("--DEBUG: typeof 'dataList': " + typeof dataList);
  // console.log("*** DEBUG: printing 'dataList': " + (dataList));
  //console.log(JSON.parse(req.body));
  //res.json(req.body);
  console.log("** inside 'req.body' of GET /recipe: " + JSON.stringify(req.body));
  res.send(req.body);
})



/* create POST route for recipe. */
router.post('/recipe', function(req, res, next) {
  console.log("== DEBUG: POST route in 'index.js': " + JSON.stringify(req.body));
  res.send(req.body);

  /* https://masteringjs.io/tutorials/express/body */

})


router.post('/images', function(req, res, next) {
  /*  TODO  */
  // res.send(req.body);

})

module.exports = router;
