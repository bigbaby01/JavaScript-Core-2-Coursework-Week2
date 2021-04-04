function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");
  for (let keys in arrayOfPeople){
  let addingFirstHeading=document.createElement('h1')
  let addingTheSecondHeading=document.createElement('h2')
  addingFirstHeading.innerText= arrayOfPeople[keys].name;
  content.appendChild(addingFirstHeading);
  addingTheSecondHeading.innerText=arrayOfPeople[keys].job;
  content.appendChild(addingTheSecondHeading);
}
console.log(content)
}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);
