const input=document.getElementById("newTask");
const taskList=document.getElementById("task-list");
const addTask=document.getElementById("addTaskBtn");
addTask.addEventListener("click",()=>{
    const task=input.value.trim();
    if(task===""){
        alert("Please enter a task.");
        return;
    }
    const li = document.createElement("li");

    const taskText = document.createElement("span");
    taskText.textContent = task;

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Mark as Complete";
    completeBtn.className = "btn btn-success btn-sm";

    completeBtn.addEventListener("click", () => {
        taskText.style.textDecoration = "line-through";
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "btn btn-danger btn-sm";

    deleteBtn.addEventListener("click", () => {
        li.remove();
    });

    li.appendChild(taskText);
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
    input.value="";
})