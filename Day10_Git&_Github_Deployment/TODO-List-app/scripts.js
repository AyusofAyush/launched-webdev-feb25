document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === '') {
            alert('Please enter a task');
            return;
        }

        // Create new task list item
        const listItem = document.createElement('li');

        // Create task text element
        const taskTextElement = document.createElement('span');
        taskTextElement.textContent = taskText;

        // Create delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');

        // Append text and delete button to list item
        listItem.appendChild(taskTextElement);
        listItem.appendChild(deleteBtn);

        // Append list item to task list
        taskList.appendChild(listItem);

        // Clear input field
        taskInput.value = '';

        // Add event listener to delete button
        deleteBtn.addEventListener('click', function() {
            taskList.removeChild(listItem);
        });

        // Add event listener to mark task as complete
        taskTextElement.addEventListener('click', function() {
            taskTextElement.classList.toggle('task-complete');
        });
    }

    // Add event listener to add task button
    addTaskBtn.addEventListener('click', addTask);

    // Add event listener for Enter key
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
    // end of the script
});
