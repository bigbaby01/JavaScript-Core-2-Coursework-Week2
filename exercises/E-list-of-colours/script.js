const colours = ["red", "blue", "green", "yellow", "pink", "brown"];
function listOfColours(colours) {
  //Accessing the content of the page and append to it the creatingHeadingElement 
  let mainContainerDiv=document.getElementById('content')
  let creatingHeadingElement= document.createElement('h1');
  creatingHeadingElement.innerHTML='<em>List Of Color </em>';
  creatingHeadingElement.style.textDecorationLine='underline';
  mainContainerDiv.appendChild(creatingHeadingElement)
  
  //creating the select element and Append to the mainContainerDiv
  let creatingSelectElement=document.createElement('select');
  mainContainerDiv.appendChild(creatingSelectElement);
  //creating the paragraph element and append to the main container Div
  let createParagraph=document.createElement('p');
  mainContainerDiv.appendChild(createParagraph)
  colours.forEach((colour) => {
   
    let creatingOptionElement=document.createElement('option');
    creatingOptionElement.innerText=colour
    creatingSelectElement.appendChild(creatingOptionElement)
    
  
  });
  
  creatingSelectElement.addEventListener("click", ()=> {
        createParagraph.innerText=`you have selected: ${creatingSelectElement.value}`
        createParagraph.style.color=creatingSelectElement.value;
      })
   
 
}

listOfColours(colours);
