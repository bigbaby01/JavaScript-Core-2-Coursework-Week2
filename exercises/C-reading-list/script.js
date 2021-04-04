// Accessing the main content container and append it the created heading that would have the style className created in the HTML document in the <style></style> tag
let content= document.querySelector('#content');
let createHeading=document.createElement('h1');
createHeading.textContent='List of Books';
createHeading.className='HeadingStyle';
content.appendChild(createHeading)

function readingList(books) {
  // Write your code here...
  let content=document.getElementById('content')
  let unOrderList= document.createElement('ul');
  content.appendChild(unOrderList)
  books.forEach(book => {
    // here I am iterating through the books array. for each book create I am creating a paragraph
    let creatingParagraph=document.createElement('p');
    //Here I am saying that the Paragraph=must have the textContent that is the Book title and author 
    creatingParagraph.textContent=`${book.title} - ${book.author}`
    let orderList=document.createElement('li')
    unOrderList.appendChild(orderList)
    orderList.appendChild(creatingParagraph)

   /*. firstly I created a folder to hold my images
   .Here I am creating a <img> element
     .Using the src attribute, I am assign the image src attribute with the value of the img property store in the books array
     .The unOrder and orderList list have the className of the style created in the index.html
   */
    let image=document.createElement('img')
    image.src=book.img;
    unOrderList.className='unOrderListStyle';
    orderList.className='OrderListStyle';
    orderList.appendChild(image)
    
    
   
    //Using The if else Statement, I am checking if the property of 'alreadyRead' is equal to true, if so, then change the background color to green
    //else change the background color to red, if it is false
    if (book.alreadyRead==true){
      orderList.style.backgroundColor='green';
    }
    else{
      orderList.style.backgroundColor='red';
    }
  });

}

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    img:'images/DonNormanImage.jfif'
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    img:'images/BrianChristianImage.jfif'
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    img:'images/AndrewHuntImage.jfif'
  }
];

readingList(books);