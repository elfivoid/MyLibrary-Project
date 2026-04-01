//variables
const CloseButtons = document.querySelectorAll(".close-btn");

// create new book variables
const hobbit_book = new Book("The Hobbit", "J.R.R. Tolkien", 300, true);
const alice_book = new Book("Alice in Wonderland","Lewis Carroll", 105, false);

const myLibrary = [
    hobbit_book,
    alice_book
];


// create book constructor function
function Book (title, author, pages, read) {
    this.id = crypto.randomUUID(); //specific id for every book item
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
// create book item



}
function removeBook() {
    CloseButtons.forEach(button => {
        button.addEventListener("click", function(event) {
            event.target.closest(".book").remove();
        });
    });
   }

   //call function
   removeBook();
   addElement();

/*function addElement() {
    
    const newDiv = document.createElement("div");
    const newContent = document.createTextNode("Hi there and greetings");
    newDiv.appendChild(newContent);
    const currentDiv =
    document.getElementById("id");
    document.body.insertBefore(newDiv, currentDiv);
}; */