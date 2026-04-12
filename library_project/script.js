//variables
/* const CloseButtons = document.querySelectorAll(".close-btn"); */

// create new book variables
const hobbit_book = new Book("The Hobbit", "J.R.R. Tolkien", 300, true);
const alice_book = new Book("Alice in Wonderland","Lewis Carroll", 105, false);

const myLibrary = [
    hobbit_book,
    alice_book
];

const modalOverlay = document.getElementById("modal-overlay");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close-btn");
const titleInput = document.getElementById("title-input");
const authorInput = document.getElementById("author-input");
const readCheck = document.getElementById("read-check");
//const cancelBtn = document.getElementById("cancel-btn");
const submitBtn = document.getElementById("submit-btn");
const addBookBtn = document.getElementById("add-book-btn");
const bookItems = document.querySelector(".book-items"); 
/*const bookForm = document.getElementById("book-form");
const cancelBtn = document.getElementById("cancel-btn");*/


submitBtn.addEventListener("click", () => {
  const title = titleInput.value.trim();
  const author = authorInput.value.trim();
  // const pages = Number(pagesInput.value); // Fehlt in HTML – hinzufügen?
  const read = readCheck.checked;

  if (!title || !author) {
    return; // Optional: Fehlermeldung
  }

  const newBook = new Book(title, author, 0, read); // Pages auf 0 setzen oder Input hinzufügen
  addBookToLibrary(newBook);
  closeModal();
});

const openModal = () => {
  modalOverlay.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
};

const closeModal = () => {
  modalOverlay.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  // Reset inputs
  titleInput.value = "";
  authorInput.value = "";
  readCheck.checked = false;
};

/* addBookBtn.addEventListener("click", () => {
  bookForm.classList.toggle("hidden");
});

cancelBtn.addEventListener("click", () => {
  bookForm.classList.add("hidden");
});
 */

addBookBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
//cancelBtn.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) closeModal();
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

/* function removeBook() {
    CloseButtons.forEach(button => {
        button.addEventListener("click", function(event) {
            event.target.closest(".book").remove();
        });
    });
   }

   removeBook();  */

myLibrary.forEach(book => renderBook(book));


