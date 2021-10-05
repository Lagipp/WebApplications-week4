console.log("client.js up and running");

fetch("/recipe/omelette")
  .then(response => response.json())
  .then(data => {
    console.log("--DEBUG: inside fetch");
    console.log("--DEBUG: you searched for food");
    console.log(JSON.stringify(data));

    const header = document.getElementsByClassName("header")[0];
    const wrappingDiv = document.getElementsByClassName("wrapper")[0];

    const unorderedList = document.createElement("ul");
    const unorderedList2 = document.createElement("ul");

    instructionsArray = data.instructions.length;
    ingredientsArray = data.instructions.length;

    header.innerHTML = data.name;

    for (m = 0; m < ingredientsArray; m++)
    {
        //console.log("--DEBUG: inside for-loop");

        let listItem = document.createElement("li");

        //console.log("--DEBUG: after creating list item");

        listItem.innerHTML = data.ingredients[m];
        //console.log("DEBUG-- : list item is", data.instructions[m]);

        //console.log("--DEBUG: after using .innerHTML");

        unorderedList.append(listItem);

        //console.log("--DEBUG: after appending listItem to unorderedList");
    }
    //console.log("==DEBUG: after for-loop, before adding to wrappingDiv");
    wrappingDiv.appendChild(unorderedList);
    

    for (p = 0; p < instructionsArray; p++)
    {
        let listItem = document.createElement("li");
        listItem.innerHTML = data.instructions[p];
        unorderedList2.append(listItem);
    }
    wrappingDiv.appendChild(unorderedList2);

  });