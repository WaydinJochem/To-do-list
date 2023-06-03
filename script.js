
let array1 = [];
let btnAdd = document.getElementById("Add");



btnAdd.addEventListener("click", () => {
    let input = {list: document.getElementById("input").value};
    array1.push(input);

    let listItems = document.querySelector(".lists");
    listItems.innerHTML = "";
    array1.forEach((data) =>{
        listItems.innerHTML += 
        `<div class="list-item">
            <input type="checkbox">
            <h3>${data.list}</h3>
            <button id='x'>X</button>
        </div>`;
    });
});