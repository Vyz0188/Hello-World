// Select form and list elements
const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

// Function to add a task to the list
function addTask(task) {
  const li = document.createElement('li');
  li.textContent = task;

  // Add a delete button to each task
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = "Delete";
  deleteBtn.style.marginLeft = "10px";
  deleteBtn.onclick = function() {
    li.remove();
  };

  li.appendChild(deleteBtn);
  list.appendChild(li);
}

// Listen for form submission
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent page reload
  const task = input.value.trim();
  if (task) {
    addTask(task);
    input.value = ''; // Clear input box
  }
});
