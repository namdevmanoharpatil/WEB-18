
var todoItems = JSON.parse(localStorage.getItem("todoData"));
// console.log(todoItems);
var completed = JSON.parse(localStorage.getItem("completedTodo")) || [];
todoItems.map(function(el,index){
    

    var tr = document.createElement("tr");

    var td1 = document.createElement("td");
    td1.textContent = el.itemName;

    var td2 = document.createElement("td");
    td2.textContent = el.itemQty;

    var td3 = document.createElement("td");
    td3.textContent = el.itemPrior;

    var td4 = document.createElement("td");
    // var btn = document.createElement("button");
    // btn.textContent = "Mark as complete";
    td4.textContent = "Complete";
    td4.style.color = "red";
        td4.style.cursor = "pointer";
        td4.addEventListener("click",function(){
            markCompleteFunction(el,index);
        });
    
    // td4.append(btn);

    tr.append(td1,td2,td3,td4);

    document.querySelector("#body").append(tr);


});

function markCompleteFunction(el,index){
    // console.log("index",index);
    // console.log(el);
    completed.push(el);
    // console.log(completed)
    localStorage.setItem("completedTodo",JSON.stringify(completed));
    // splice 
    todoItems.splice(index,1);
    // console.log("todo",todoItems);
    localStorage.setItem("todoData",JSON.stringify(todoItems));
    
}