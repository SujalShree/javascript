const input=document.getElementById("newTask");
const taskList=document.getElementById("task-list");
const addTask=document.getElementById("addTaskBtn");
addTask.addEventListener("click",()=>{
    const task=input.value.trim();
    if(task===""){
        alert("Please enter a task.");
        return;
    }
    const li=document.createElement("li");
    li.textContent=task;
    taskList.appendChild(li);
    input.value="";
})