var list = document.getElementById("list");

function addTodo() {
  var todo = document.getElementById("todo");

  if (todo.value === "") {
    alert("Please write something!");
  } else {
    list.innerHTML +=
      "<li>" +
        "<input type='text' value='" + todo.value + "' disabled />" +
        "<div>" +
          "<button onclick='deleteTodo(event)' class='delete-btn'>Delete</button> " +
          "<button onclick='editTodo(event)' class='edit-btn'>Edit</button>" +
        "</div>" +
      "</li>";
  }

  todo.value = "";
}

function addTodoEnter(event) {
  if (event.keyCode === 13) {
    addTodo();
  }
}

function deleteTodo(event) {
  event.target.parentNode.parentNode.remove();
}

function editTodo(event) {
  var input = event.target.parentNode.parentNode.childNodes[0];
  input.disabled = false;
  input.focus();
  event.target.innerHTML = "Update";
  event.target.setAttribute("onclick", "updateTodo(event)");
}

function updateTodo(event) {
  var input = event.target.parentNode.parentNode.childNodes[0];
  input.disabled = true;
  event.target.innerHTML = "Edit";
  event.target.setAttribute("onclick", "editTodo(event)");
}

function deleteAll() {
  list.innerHTML = "";
}
