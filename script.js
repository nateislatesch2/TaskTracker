function addTask()  {
    const taskInput = document.getElementById('task');
    const dueDateInput = document.getElementById('due-date');
    const priorityInput = document.getElementById('priority');
    const taskList = document.getElementById('task-list')
    const task= taskInput.value;
    const dueDate= dueDateInput.value;
    const priority= priorityInput.value;

    if (task.trim() === '' || dueDate === '') {
        alert('Please enter a task and due date');
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `
        <span>${task}</span>
        <span>Due: ${dueDate}</span>
        <span>Priority: ${priority}</span>
    
    `;

    taskList.appendChild(li);

    taskInput.value = '';
    dueDateInput.value='';
}