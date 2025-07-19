import { addTask, changeSomething, something } from './addTask.js';
import { logSomething } from './somethingLogger.js';

logSomething();

changeSomething("something else");
// something = "something else";
logSomething();
// Select elements
let newTaskInput = document.getElementById('new-task');
let addTaskBtn = document.getElementById('add-task-btn');
let taskList = document.getElementById('task-list');

// Event listener for adding tasks
addTaskBtn.addEventListener('click', function() {
    var taskText = newTaskInput.value.trim();
    if (taskText !== '') {
        addTask(taskText, taskList);
        newTaskInput.value = '';
    }
});

// Optional: Add task on Enter key press
newTaskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTaskBtn.click();
    }
});

const headeElement = document.querySelector("head");
console.log(headeElement);

addEventListener("resize", (e) => {
    const width = window.innerWidth;
    // console.log(width);
    const linkElement = document.querySelector("#media-query");
    // console.log(linkElement);
    
    if (width < 425) {
        // add prebuild tag to head <link rel="stylesheet" href="mobile.css">
        linkElement.href = "./mobile.css";
    } else if (width >= 425) {
        // add prebuild tag to head <link rel="stylesheet" href="tablet.css">
        linkElement.href = "./tablet.css";
    }
});
