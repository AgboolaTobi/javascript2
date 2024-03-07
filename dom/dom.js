// let banner = document.getElementById("page-banner");

//let page = document.getElementsByClassName("title");

// page.array.forEach(element => console.log(element));

// for(let index = 0; index <page.length; index++){ // to loop through an html collection
//     const element = page[index];
//     console.log(element);

// }

// Array.from(page).forEach((element) => console.log(element.innerHTML = "Agboola Tobi")) // create an aray from page... the innerHTML shows changes made both in the pag and in the inspection code.

// console.log(banner)

// console.log(page)

// let ul = document.getElementsByTagName("ul")

// console.log(ul)

// let books = document.querySelector("#book-list"); // converts your query selector to a list

// let books = document.querySelectorAll("#book-list");

// let books = document.querySelectorAll("#book-list li .name");

// books.forEach((book) => console.log(book.textContent))

// books.forEach((book) => console.log(book.textContent += (" (book title) ")))

// books.forEach((book) => console.log(book.innerHTML += (" (book title) ")))

// console.log(books)
// console.log(books.id)

// console.log(books.parentElement.textContent)

// console.log(books.parentNode)

let books = document.querySelector("#book-list ul");

books.addEventListener("click", (e) => {
  console.log(e.target);
  if ((e.target.className = "delete")) {
    const li = e.target.parentElement;
    books.removeChild(li);
  }
});

const addForms = document.forms["add-book"];

addForms.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = addForms.querySelector('input[type="text"]').value;
  // console.log(value)   // this is to see the value

  const li = document.createElement("li");
  const addBook = document.createElement('span')
  const deleteBtn = document.createElement('span')


  addBook.textContent = value;
  deleteBtn.textContent = "delete";


  li.appendChild(addBook);
  li.appendChild(deleteBtn);

  books.appendChild(li)

  addBook.classList.add("name") //this is a method of styling the delete button
  deleteBtn.classList.add("delete")

  addBook.className = "name"  // this is another method of styling
  deleteBtn.className = "delete"
  
});


const searchBar = document.forms['search-books'].querySelector('input');

searchBar.addEventListener('keyup',(e)=>{
    const value = e.target.value.toLowerCase();
    const title = books.getElementsByTagName("li");
    

    Array.from(title).forEach((title)=> {
        const text = title.firstElementChild.textContent;
        if(text.toLowerCase().includes(value)) {
            title.style.display = 'block';
        } else {
            title.style.display = 'none'
        }
    
    })

})
