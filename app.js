var list = document.getElementById('list');
var input = document.getElementById('input-field');

let LIST = [];
let id = 0;

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

function updateList(item, id, done) {
    console.log(item);
    console.log(id);
    console.log(done);
    const text = `<li id="${id}" class="item">
                    <div>
                        <p style="display: inline-block" class = "text"> ${item} </p>
                        <button onclick=removeFromList(${id})> Remove </button>
                    </div>
                </li>`;
    const position = "beforeend";
    list.insertAdjacentHTML(position, text);
}

function removeFromList(id) {
    var element = document.getElementById(id);
    element.parentNode.removeChild(element);
    LIST.splice(id, 1);
}

