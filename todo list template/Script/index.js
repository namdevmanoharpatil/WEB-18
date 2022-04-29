document.querySelector("#form").addEventListener("submit",myFunction);
var todoData;
// var myData = JSON.parse(localStorage.getItem("todoData"));
// if( myData == null){
//     todoList = [];
// }else {
//     todoList = JSON.parse(localStorage.getItem("todoData"));
// }
todoList = JSON.parse(localStorage.getItem("todoData")) || [];
function myFunction(){
    event.preventDefault();
    var name = document.querySelector("#name").value;
    var quantity = document.querySelector("#qty").value;
    var prior = document.querySelector("#priority").value;

    var todoObj = {
        itemName: name,
        itemQty: quantity,
        itemPrior: prior
    };
    todoList.push(todoObj);
    // console.log(todoList);

    localStorage.setItem("todoData",JSON.stringify(todoList));
    
}
//bugs
// 1. Whenever page is refreshing - array(todoList) is empty
// 2. when key id not present- pushing into null will throw error 