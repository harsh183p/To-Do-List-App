document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        const li = document.createElement("li");
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="delete">Delete</button>
        `;
        taskList.appendChild(li);
        taskInput.value = "";

        // Add an event listener to delete tasks
        const deleteButton = li.querySelector(".delete");
        deleteButton.addEventListener("click", function () {
            li.remove();
        });
    }

    // Add a task when the "Add" button is clicked
    addTaskButton.addEventListener("click", addTask);

    // Add a task when Enter key is pressed in the input field
    taskInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            addTask();
        }
    });
});
