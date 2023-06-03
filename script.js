
let array1 = [];
let btnAdd = document.getElementById("Add");
let btnSort = document.getElementById("Sort");
querySelector

// list items and add the to array
btnAdd.addEventListener("click", () => {
    let input = { list: document.getElementById("input").value.trim() };
    array1.push(input);
    let listItems = document.querySelector(".lists");
    listItems.innerHTML = "";
    array1.forEach((data) => {
        listItems.innerHTML +=
            `<div class="list-item">
            <input type="checkbox" id="check" onclick = "(function(){
                let checkbox = document.getElementById("check");
                if (checkbox.checked === true)
                {
                    document.querySelector("h3").style.textDecoration = "line-through";
                } else {
                    document.querySelector("h3").style.textDecoration = "none";
                }
            })();">
            <h3>${data.list}</h3>
            <button id='sake'>X</button>
        </div>`;
    });
});





