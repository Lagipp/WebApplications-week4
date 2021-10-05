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