//Getting Elements
// localStorage.clear();
const toDoInput = document.getElementById("addTask");
const toDoBtn = document.getElementById("addBtn");
const toDoList = document.getElementById("tasks");

//Event Listeners
toDoBtn.addEventListener('click', addTodo);
toDoList.addEventListener('click', deleteCheck);
document.addEventListener('DOMContentLoaded', getTodos);

//Functions
function addTodo(event){
    //Prevent from form submitting / reloading
    event.preventDefault();

    const toDoDiv = document.createElement("div");
    toDoDiv.classList.add('todo-div');
    const newToDo = document.createElement('li');
    if(toDoInput === ''){
        alert("You must write something!!!");
    }
    else{
        newToDo.innerText = toDoInput.value;
        newToDo.classList.add('items');
        toDoDiv.appendChild(newToDo);
        // tasks.appendChild(newToDo);
        // tasks.innerHTML += `<li class = "items"> ${toDoInput.value} <button class = "dltNote">x</button></li>`
        
        savelocal(toDoInput.value);
        const deleted = document.createElement('button');
        deleted.classList.add('dltNote');
        deleted.innerText = "x";
        toDoDiv.appendChild(deleted);
        tasks.appendChild(toDoDiv);
        toDoInput.value = "";
    }
}

function deleteCheck(event){
    console.log(event.target);
    const item = event.target;
    
    if(item.classList[0] === 'dltNote'){
        item.parentElement.remove();

        removeLocalToDos(item.parentElement);

        // item.parentElement.addEventListener('transitionend', function(){
        //     item.parentElement.remove();
        // })
    }
}

function savelocal(todo){
    //check if item/s are there
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function getTodos(){
    //check if item/s are there
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    todos.forEach(todo => {
        const toDoDiv = document.createElement("div");
        toDoDiv.classList.add('todo-div');
        //create li
        const newTodo = document.createElement('li');

        // tasks.innerHTML += `<li class = "items"> ${todo} <button class = "dltNote">x</button></li>`

        newTodo.innerText = todo;
        newTodo.classList.add('items');
        toDoDiv.appendChild(newTodo);

        const deleted = document.createElement('button');
        deleted.innerText = "x"
        deleted.classList.add('dltNote');
        toDoDiv.appendChild(deleted);

        tasks.appendChild(toDoDiv);
    });
}

function removeLocalToDos(todo){
    //check if item/s are there
    let todos;
    if(localStorage.getItem('todos' === null)){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    const todoIndex = todos.indexOf(todo.children[0].innerText);
    todos.splice(todoIndex, 1);
    localStorage.setItem('todos', JSON.stringify(todos));
}