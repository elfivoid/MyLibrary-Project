//variables
const CloseButtons = document.querySelectorAll(".close-btn");

// create new books
const hobbit_book = new Book("The Hobbit", "J.R.R. Tolkien", 300, true);
const alice_book = new Book("Alice in Wonderland","Lewis Carroll", 105, false);

const myLibrary = [
    hobbit_book,
    alice_book
];
// create book constructor function
function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {

}
function removeBook() {
    CloseButtons.forEach(button => {
        button.addEventListener("click", function(event) {
            event.target.closest(".book").remove();
        });
    });
   }

   //call
   removeBook();

