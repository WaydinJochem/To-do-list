
let array1 = [];
let btnAdd = document.getElementById("Add");
let btnSort = document.getElementById("Sort");

// list items and add the to array
btnAdd.addEventListener("click", addData)
 
function addData() {
    let input = {list: document.getElementById("input").value.trim()};
    array1.push(input);
    let listItems = document.querySelector(".lists");
    listItems.innerHTML = "";
    array1.forEach((data) =>{
        listItems.innerHTML += 
        `<div class="list-item">
            <input type="checkbox" id="check">
            <h3>${data.list}</h3>
            <button id='sake'>X</button>
        </div>`;
    });
    btnSort.addEventListener("click, clrData")
    function clrData () {
         
    }
}
