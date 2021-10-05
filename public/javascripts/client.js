console.log("client.js up and running");

fetch("/recipe/food")
  .then(response => response.json())
  .then(data => {
    console.log("--DEBUG: inside fetch");
    console.log("--DEBUG: you searched for food");
    console.log(JSON.stringify(data));

    
  });