
let array1 = [];
let btnAdd = document.getElementById("Add");

btnAdd.addEventListener("click", () => {
    let input = document.getElementById("input").value;
    array1.push(input);
    document.getElementById("display").innerHTML = array1;
});