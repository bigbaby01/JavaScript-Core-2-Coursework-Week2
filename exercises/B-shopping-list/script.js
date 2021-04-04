function shoppingList(arrayOfPeople) {
  // Write your code here...
  //here I am creating a headingText of the page and append it to the the main container with the id=content
  let content=document.querySelector('#content')
  let headingText=document.createElement('h1');
  headingText.innerText="Shopping List";
  headingText.style.textDecorationLine="underline"
  content.appendChild(headingText)
  //I am creating an unOrderListElement  and append it to the container div
  let unOrderListElement=document.createElement('ul');
  content.appendChild(unOrderListElement);
   arrayOfPeople.forEach(listElement => {
     //Here I am iterating through the array and for each element I am creating a list element and append it inside the unOrder list
     let creatingListElement=document.createElement('li')
     creatingListElement.textContent=listElement;
     unOrderListElement.appendChild(creatingListElement);
   })
}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
