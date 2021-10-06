console.log("client.js up and running");

fetch("/recipe/omelette")
  .then(response => response.json())
  .then(data => {

    const header = document.getElementsByClassName("header")[0];
    const wrappingDiv = document.getElementsByClassName("wrapper")[0];

    const unorderedList = document.createElement("ul");
    const unorderedList2 = document.createElement("ul");

    instructionsArray = data.instructions.length;
    ingredientsArray = data.instructions.length;


    /* Changing the name */
    header.innerHTML = data.name;


    /* Adding the ingredients from JSON to an unordered list */
    for (m = 0; m < ingredientsArray; m++)
    {
        let listItem = document.createElement("li");
        listItem.innerHTML = data.ingredients[m];
        unorderedList.append(listItem);
    }
    wrappingDiv.appendChild(unorderedList);
    

    /* Adding the instructions from JSON to an unordered list */
    for (p = 0; p < instructionsArray; p++)
    {
        let listItem = document.createElement("li");
        listItem.innerHTML = data.instructions[p];
        unorderedList2.append(listItem);
    }
    wrappingDiv.appendChild(unorderedList2);

  });

  const recipeTextArea = document.getElementById("name-text");
  const ingredientsTextArea = document.getElementById("ingredients-text");
  const instructionsTextArea = document.getElementById("instructions-text");
  
  const addIngredientsButton = document.getElementById("add-ingredient");
  const addInstructionsButton = document.getElementById("add-instruction");
  const addSubmitButton = document.getElementById("submit");

  let dataList = { name: "", ingredients: [], instructions: [] };

  /* creating eventListeners for the buttons */

  addIngredientsButton.addEventListener("click", function () {
    let ingrInput = ingredientsTextArea.value;
    dataList.ingredients.push(ingrInput);


    /*
    let dataArray = dataList.ingredients.split("\r\n");
    for (let m = 0; m < dataArray.length; m++)
    {
      dataArray[m] = JSON.parse(dataArray[m]);
    }
    */

    console.log("== DEBUG: inside datalist.ingredients: " + JSON.stringify(dataList.ingredients));
  });

  addInstructionsButton.addEventListener("click", function() {
    let instrInput = instructionsTextArea.value;
    dataList.instructions.push(instrInput);
    console.log("== DEBUG: inside datalist.instructions: " + JSON.stringify(dataList.instructions));
  });

  addSubmitButton.addEventListener("click", function() {
    let recipeInput = recipeTextArea.value;
    console.log("== DEBUG: before fetch in 'submit'-button");
    fetch("/recipe", {
      method: 'POST',
      headers: 
      {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataList),
    })
    .then(response => response.json())
    .then(
      console.log("==DEBUG: inside second '.then' in fetch()"),
      //let recipeInput = recipeTextArea.value,
      //dataList.name.push(recipeInput),
      //console.log("== DEBUG: inside dataList.recipe: " + dataList.name),
      console.log(dataList))
      //return dataList;
      //dataList => 
  });

