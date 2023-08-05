// Function to create a new to-do item
function createTodoItem(todoText) {
  const li = document.createElement("li");
  li.innerHTML = `
    <input type="checkbox">
    <span>${todoText}</span>
    <button>Delete</button>
  `;

  const deleteBtn = li.querySelector("button");
  deleteBtn.addEventListener("click", () => {
    const todoListItem = document.getElementById("todoListItem");
    todoListItem.removeChild(li);
    playDingSound(); // Add the 'ding' sound when deleting a task
  });

  const checkbox = li.querySelector("input[type=checkbox]");
  checkbox.addEventListener("change", () => {
    li.classList.toggle("completed");
    
    if (checkbox.checked) {
      todoListItem.removeChild(li);
      todoListItem.appendChild(li);
    }
    playDingSound(); // Add the 'ding' sound when checking off a task
  });

  return li;
}

function addTodo() {
  const newTodoInput = document.getElementById("newTodoItem");
  const todoText = newTodoInput.value.trim();

  if (todoText !== "") {
    const todoListItem = document.getElementById("todoListItem");
    const newTodoItem = createTodoItem(todoText);
    todoListItem.appendChild(newTodoItem);
    newTodoInput.value = "";
    playDingSound(); // Add the 'ding' sound when adding a new task
  }
}

// Function to play the 'ding' sound 
function playDingSound() {
  const audio = new Audio('computerwav-14702.mp3');
  audio.play();
}

// Event listener for the 'Add' button
const addTodoBtn = document.getElementById("addTodoBtnItem");
addTodoBtn.addEventListener("click", addTodo);

const newTodoInput = document.getElementById("newTodoItem");
newTodoInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
      addTodo();
  }
});

// Event listener for the delete button 
const todoListItem = document.getElementById("todoListItem");
todoListItem.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
      const listItem = event.target.parentElement;
      listItem.classList.toggle("deleted");
      if (listItem.classList.contains("deleted")) {
          const deleteBtn = listItem.querySelector("button");
          deleteBtn.textContent = "Undo";
      } else {
          listItem.remove();
      }
      playDingSound();
  }
});
