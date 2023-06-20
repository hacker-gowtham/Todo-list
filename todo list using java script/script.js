const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const todoText = todoInput.value.trim();

    if (todoText !== '') {
        addTodoItem(todoText);
        todoInput.value = '';
    }
});

function addTodoItem(todoText) {
    const todoItem = document.createElement('li');
    const todoTextSpan = document.createElement('span');
    const deleteButton = document.createElement('button');
    const lineButton = document.createElement('button');

    todoTextSpan.textContent = todoText;

    deleteButton.textContent = 'Delete';
    lineButton.textContent = 'Finished';

    deleteButton.addEventListener('click', function() {
        todoItem.remove();
    });

    lineButton.addEventListener('click', function() {
        todoItem.style.textDecoration = 'line-through';
    });

    todoItem.appendChild(todoTextSpan);

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');
    buttonContainer.appendChild(deleteButton);
    buttonContainer.appendChild(lineButton);
    todoItem.appendChild(buttonContainer);

    todoList.appendChild(todoItem);
}
