const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("task-add");
const taskList = document.getElementById("task-list");

const delBtns = document.getElementsByClassName("task-del")

const addTask = () => {

    let newTask = document.createElement("li");
    newTask.classList.add("task");

    let paragraph = document.createElement("p");
    paragraph.classList.add("task-p");
    paragraph.textContent = taskInput.value;

    let button = document.createElement("button");
    button.classList.add("task-del");
    button.textContent = "X";

    button.addEventListener("click", () => {
        button.parentElement.remove(); 
    });

    newTask.appendChild(paragraph);
    newTask.appendChild(button);

    taskList.appendChild(newTask);
}