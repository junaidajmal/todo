const listContent= document.querySelector(".content");
const itemName= document.querySelector("#item-name");
const addButton= document.querySelector(".add-btn");

var items =[];
const localStorageItems = localStorage.getItem("cart-items");
if (localStorageItems != null){
    items=JSON.parse(localStorageItems);
}

function deleteBtnFn (e) {
   
    e.target.parentElement.remove();

}

function addButtonFn (e) {

    const itemNameValue= itemName.value;
    itemName.value="";

    const JSONitems = JSON.stringify("items");

    items.push(itemNameValue);
    localStorage.setItem("cart-items", JSONitems )

    console.log(items)

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

    
deleteBtn.addEventListener("click", deleteBtnFn);
}

addButton.addEventListener("click", addButtonFn);


