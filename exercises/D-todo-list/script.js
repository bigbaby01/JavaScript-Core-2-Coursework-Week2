function todoList(todos) {
 let content=document.querySelector('#content') 
 let creatingHeading=document.createElement('h1');
 creatingHeading.innerText='To-do List';
 creatingHeading.style.textDecorationLine="underline";
 content.appendChild(creatingHeading)
 let creatingUnOrderList=document.createElement('ul')
 content.appendChild( creatingUnOrderList)
 
 
 todos.forEach((element) => {
   let creatingOrderList=document.createElement('li');
   creatingOrderList.innerText
   =element.todo;
   creatingUnOrderList.appendChild(creatingOrderList);
 });
 
 let getList=document.querySelectorAll('li');
 getList.forEach(listElement =>{
  listElement.addEventListener("click", function() {
   
   if (listElement.style.textDecoration==="line-through"){
    listElement.style.textDecoration="none";
   }
   else {
    listElement.style.textDecoration="line-through";
   }
 })
})
}

const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);