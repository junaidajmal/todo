const listContent= document.querySelector(".content");
const itemName= document.querySelector("#item-name");
const addButton= document.querySelector(".add-btn");

function addButtonFn (e) {

    const itemNameValue= itemName.value;
    itemName.value="";

    const liItem= document.createElement("li");
    liItem.className="item";

    const pitem = document.createElement("p");
    const ptext = document.createTextNode(itemNameValue);
    pitem.appendChild(ptext);

    const deleteBtn= document.createElement("button");
    deleteBtn.className="delete-btn";
    const btnText = document.createTextNode("Delete Item")
    deleteBtn.appendChild(btnText);
    
    liItem.appendChild(pitem);
    liItem.appendChild(deleteBtn);
   
    listContent.appendChild(liItem);
}

addButton.addEventListener("click", addButtonFn);

