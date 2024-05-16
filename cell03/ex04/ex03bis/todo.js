$(document).ready(function() {
  // Function to create a new TO-DO
  function createToDo() {
    const todoText = prompt("Enter a new TO-DO:");
    if (todoText) {
      const todoDiv = $("<div>").text(todoText);
      todoDiv.click(removeToDo);
      $("#ft_list").prepend(todoDiv);
      saveToCookie();
    }
  }

  // Function to remove a TO-DO
  function removeToDo() {
    const shouldRemove = confirm("Do you want to remove this TO-DO?");
    if (shouldRemove) {
      $(this).remove();
      saveToCookie();
    }
  }

  // Function to save the TO-DOs as cookies
  function saveToCookie() {
    const todos = [];
    $("#ft_list > div").each(function() {
      todos.push($(this).text());
    });
    const todoListString = JSON.stringify(todos);
    document.cookie = `todoList=${todoListString}`;
  }

  // Function to load TO-DOs from cookies
  function loadFromCookie() {
    const cookieValue = document.cookie.replace(
      /(?:(?:^|.*;\s*)todoList\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    if (cookieValue) {
      const todos = JSON.parse(cookieValue);
      for (const todoText of todos) {
        const todoDiv = $("<div>").text(todoText);
        todoDiv.click(removeToDo);
        $("#ft_list").append(todoDiv);
      }
    }
  }

  // Attach event listeners
  $("#newButton").click(createToDo);

  // Load TO-DOs from cookies when the page loads
  loadFromCookie();
});
