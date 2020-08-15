var list = document.getElementById('list');
var input = document.getElementById('input-field');

let LIST = [];
let id = 0;

console.log('testing');

input.addEventListener("keyup", function(event) {
    if(event.keyCode === 13) {
        event.preventDefault();
        addToListArray();
        input.value = "";
    }
})

function addToListArray() {
    var input = document.getElementById('input-field').value;
    LIST.push({
        name: input,
        id: id    
    });
    updateList(input, id, false);
    id++;
    this.input.value = "";
}

function updateList(inputName, id) {
    const text = `<li id="${id}" class="item">
                    <div>
                        <p style="display: inline-block" class="text"> ${inputName} </p>
                        <button onclick=removeFromList(${id})> Remove </button>
                    </div>
                </li>`;
    const position = "beforeend";
    list.insertAdjacentHTML(position, text);
    console.log(LIST);
    console.log("finished adding item");
}

function removeFromList(id) {
    if( id == LIST.slice(-1)[0].id) {
        console.log('popped');
        LIST.pop();
    } else {
        LIST.splice(id,1);
    }
    var element = document.getElementById(id);
    element.parentNode.removeChild(element);
    console.log('finished removing from list');
    console.log(LIST);
}

