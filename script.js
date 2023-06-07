
const btnAdd = document.getElementById("add"); //add button 
const array1 = []; //array that data is pushed to, saves all data from input 

btnAdd.addEventListener ('click', addInput) // activates function addInput whenever it's clicked

function addInput () {
        const parentNode = document.getElementById("item"); //parent node
        const addedValue = document.createElement("div"); //child node , will appear underneath parent node
        addedValue.innerHTML = `<input type="checkbox" class="box" name="checkbox">
        <input type="text" placeholder="input list-item" class="task">
        <button id="del">✖️</button><br>`; //template literal, to be added to display
        parentNode.appendChild(addedValue); //make sure addValue appears underneath parentNode in Html

        // Delete button section
        let btnDel = addedValue. getElementById("del"); // delete button
        btnDel.addEventListener ('click' , delDiv);
        function delDiv() {
                let delValue = remove(addedValue)
        };
}
