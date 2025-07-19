let something = "something";

// Function to add a task
function addTask(taskText, listElement) {
    // Create list item
    var li = document.createElement('li');
    li.className = 'task-item';

    // Create task text
    var taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    // Create delete button
    var deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete';

    // Append elements
    li.appendChild(taskSpan);
    li.appendChild(deleteBtn);
    listElement.appendChild(li);

    // Event listener for delete button
    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(li);
    });
}

function changeSomething(newSomething) {
    something = newSomething;
}

// Export the addTask function
export { addTask, changeSomething, something };