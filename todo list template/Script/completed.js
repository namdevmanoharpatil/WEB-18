
var completedData = JSON.parse(localStorage.getItem("completedTodo")) || [];
completedData.map(function(el){ 
    var tr = document.createElement("tr");

    var td1 = document.createElement("td");
    td1.textContent = el.itemName;

    var td2 = document.createElement("td");
    td2.textContent = el.itemQty;

    var td3 = document.createElement("td");
    td3.textContent = el.itemPrior;

    tr.append(td1,td2,td3);

    document.querySelector("#body").append(tr);

});