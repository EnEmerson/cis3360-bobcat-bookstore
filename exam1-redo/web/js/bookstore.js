var $ = function(id){
    return document.getElementById(id);
}
var count = 0;
var bookList = [];

$("btnAdd").onclick = function addBook(){
    //adds book to the array if validation passes
    if(!textIsEmpty()){
        alert("Please enter all fields.");
    }
    else{
        var bPrice = $("price").value;
        if(TryParseFloat(bPrice, 0) === 0){
            alert("Enter a valid price");
            return;
        }

        var bQuant = $("qty").value;
        if(TryParseInt(bQuant,0) === 0){
            alert("Enter a valid quantity");
            return;
        }

        var bTitle = $("title").value;
        var bAuthor = $("author").value;
        var bDate = $("publish").value;

        if(validateBook(bTitle)){
            bookList.push(
                {
                    bookTitle: bTitle,
                    bookAuthor: bAuthor,
                    bookPrice: bPrice,
                    bookQuantity: bQuant,
                    bookDate: bDate
                }
            );
            alert("You added " + bTitle + " to the cart.");
            showCount(bQuant);
        }
    }
}

function showCount(quantity){
    //counts up the books in the list
    var q = parseInt(quantity);
    count += q;
    $("lblCount").innerHTML = "Inventory Count: " + count;
}

function validateBook(title){
    //checks if the book title is already in the list and alerts the user if so

    for(var i = 0; i < bookList.length; i++){
        if(title === bookList[i].bookTitle){
            alert("Book already in list.");
            return false;
        }
    }
    return true;
}

$("btnView").onclick = function viewInventory(){
    //loops through the array and displays books in the list 1 by 1 as an alert to the user

    if(bookList.length === 0){
        alert("No books listed.");
    }

    for(var i = 0; i < bookList.length; i++){
        alert("Title: " + bookList[i].bookTitle + "\n" +
                "Author: " + bookList[i].bookAuthor + "\n" +
                "Price: " + bookList[i].bookPrice + "\n" +
                "Quantity: " + bookList[i].bookQuantity + "\n" +
                "Published: " + bookList[i].bookDate + "\n");
    }
}

function TryParseInt(str,defaultValue) {
    var retValue = defaultValue;
    if(str !== null) {
        if(str.length > 0) {
            if (!isNaN(str)) {
                retValue = parseInt(str);
            }
        }
    }
    return retValue;
}
function TryParseFloat(str,defaultValue) {
    var retValue = defaultValue;
    if(str !== null) {
        if(str.length > 0) {
            if (!isNaN(str)) {
                retValue = parseFloat(str);
            }
        }
    }
    return retValue;
}
function textIsEmpty(){
    if($("title").value === "")
    {return false;}
    if($("author").value === "")
    {return false;}
    if($("price").value === "")
    {return false;}
    if($("qty").value === "")
    {return false;}
    if($("publish").value === "")
    {return false;}
    else
    {return true;}
}
$("btnClear").onclick = function clearForm(){
    //clears the input form
    $("form1").reset();
}

$("btnEmpty").onclick = function resetAll(){
    //clears the input form of all data and empties the list
    var answer = confirm("This will clear the form and empty the inventory, are you sure?");
    if(answer) {
        count = 0;
        bookList = [];
        $("form1").reset();
        $("lblCount").innerHTML = "Inventory Count: None!";
    }
}