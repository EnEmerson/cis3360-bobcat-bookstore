var $ = function(id){
    return document.getElementById(id);
}

var count = 0;
var bookList = [];

function addBook(){
    //adds book to the array if validation passes
    var bPrice;
    try{
        bPrice = parseFloat($("price").value);
    }
    catch(err){
        alert("please enter a price for the book");
        return;
    }

    var bQuant;
    try{
        bQuant = parseInt($("quantity").value);
    }
    catch(err){
        alert("please enter a valid number of books");
        return;
    }

    var Book = {
        bookTitle: $("title").value,
        bookAuthor: $("author").value,
        bookPrice: bPrice,
        bookQuantity: bQuant,
        bookDate: new Date($("publish").getFullYear())
    }

    if(validateBook(Book.bookTitle)){

    }
}

function showCount(){
    //counts up the books in the list
    count ++; //currently incorrect, must increment by the quantity of books added
    $("lblCount").innerHTML = "Inventory Count: " + count;
}

function validateBook(x){
    //checks if the book title is already in the list and alerts the user
    var title = x;

    for(var i = 0; i < bookList.length; i++){

    }
}

function viewInventory(){
    //loops through the array and displays books in the list 1 by 1 as an alert to the user
}

$("btnClear").onclick = function clearForm(){
    //clears the input form of all data and empties the list
    count = 0;
    bookList = [];
    $("title").value = "";
    $("author").value = "";
    $("price").value = "";
    $("qty").value = "";
    $("publish").value = "";
}