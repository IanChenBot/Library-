/* Planning : JavaScript Logic 
    Listen for onclick event from button within HTML form     
    onClick query for input elements within form and create object 
    User Input into variable containing instances of Book
    Rendering Times : 
    DOM node containing information from User Input 



*/

let myLibrary = []; 
let btn = document.querySelector("form #submit");
btn.addEventListener("click", addBookToLibrary);


function displayBook(...books){
    const container = document.querySelector("content");
    books.forEach((book)=>{
        const div= document.createElement("div");
        for(const property in book){
            const textContainer = document.createElement("div");
            let content;

            if(typeof(book[property])=== "boolean"){
                content = document.createElement('input');
                content.type="checkbox";
                content.checked= book[property];
                content.addEventListener('change', function(){
                    book.property = !book[property];
                })
                
            }else{
                content = document.createTextNode(`${property} : ${book[property]}`);
            }

            textContainer.appendChild(content);
            div.appendChild(textContainer);
        }
        container.appendChild(div);
    })
}

function Book([title, author, pages, read]) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(){ 
    const userInput = Array
        .from(document.querySelectorAll("form input"))
        .map(input => {
            if (input.id == "checkbox")return input.checked;
            return input.value});
    
    const entry = new Book(userInput);
    myLibrary.push(entry);
    displayBook(entry);
}
