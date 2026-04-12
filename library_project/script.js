//variables
const CloseButtons = document.querySelectorAll(".close-btn");

// create new book variables
const hobbit_book = new Book("The Hobbit", "J.R.R. Tolkien", 300, true);
const alice_book = new Book("Alice in Wonderland","Lewis Carroll", 105, false);

const myLibrary = [
    hobbit_book,
    alice_book
];

const addBookBtn = document.getElementById("add-book-btn");
const bookForm = document.getElementById("book-form");
const cancelBtn = document.getElementById("cancel-btn");
const bookItems = document.querySelector(".book-items");

addBookBtn.addEventListener("click", () => {
  bookForm.classList.toggle("hidden");
});

cancelBtn.addEventListener("click", () => {
  bookForm.classList.add("hidden");
});

// create book constructor function
function Book (title, author, pages, read) {
    this.id = crypto.randomUUID(); //specific id for every book item
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
// create book item
myLibrary.push(book);
renderBook(book);
}

// Render Function
function renderBook(book) {
  const bookDiv = document.createElement("div");
  bookDiv.className = "book";
  bookDiv.dataset.id = book.id;
  bookDiv.innerHTML = `
    <div class="book-header">
      <p>${book.title}</p>
      <button class="close-btn">X</button>
    </div>
    <div class="content">
      <p>by ${book.author}</p>
      <p>${book.pages} pages</p>
      <p>${book.read ? "Read" : "Not read"}</p>
    </div>
  `;
  bookItems.appendChild(bookDiv);

  const closeBtn = bookDiv.querySelector(".close-btn");
  closeBtn.addEventListener("click", () => bookDiv.remove());
}

bookForm.addEventListener("submit", event => {
  event.preventDefault();
  const title = bookForm.title.value.trim();
  const author = bookForm.author.value.trim();
  const pages = Number(bookForm.pages.value);
  const read = bookForm.read.checked;
 
  const newBook = new Book(title, author, pages, read);
  addBookToLibrary(newBook);

  bookForm.reset();
  bookForm.classList.add("hidden");
});


function removeBook() {
    CloseButtons.forEach(button => {
        button.addEventListener("click", function(event) {
            event.target.closest(".book").remove();
        });
    });
   }

   removeBook();

