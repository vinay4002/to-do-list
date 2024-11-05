document.getElementById('task-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const taskInput = document.getElementById('task-input').value;
    const dueDate = document.getElementById('due-date').value;
    const priority = document.getElementById('priority').value;
    const label = document.getElementById('label').value;

    addTask(taskInput, dueDate, priority, label);

    document.getElementById('task-form').reset();
});

function addTask(task, dueDate, priority, label) {
    const taskList = document.getElementById('task-list');

    const li = document.createElement('li');
    li.className = priority;

    const taskDetails = document.createElement('div');
    taskDetails.className = 'task-details';
    taskDetails.innerHTML = `<strong>${task}</strong> <br> Due: ${dueDate} <br> Label: ${label}`;

    const taskActions = document.createElement('div');
    taskActions.className = 'task-actions';
    taskActions.innerHTML = `<button onclick="editTask(this)">Edit</button> <button onclick="deleteTask(this)">Delete</button>`;

    li.appendChild(taskDetails);
    li.appendChild(taskActions);

    taskList.appendChild(li);
}

function editTask(button) {
    const li = button.parentElement.parentElement;
    const taskDetails = li.querySelector('.task-details').innerHTML.split('<br>');

    document.getElementById('task-input').value = taskDetails[0].replace('<strong>', '').replace('</strong>', '').trim();
    document.getElementById('due-date').value = taskDetails[1].replace('Due: ', '').trim();
    document.getElementById('label').value = taskDetails[2].replace('Label: ', '').trim();

    deleteTask(button);
}

function deleteTask(button) {
    const li = button.parentElement.parentElement;
    li.remove();
}
