// Function to create a new TO-DO
window.onload = function() {
function createToDo() {
		const todoText = prompt("Enter a new TO-DO:");
		if (todoText) {
			const todoDiv = document.createElement("div");
			todoDiv.textContent = todoText;
			todoDiv.addEventListener("click", removeToDo);
			document.getElementById("ft_list").prepend(todoDiv);
			saveToCookie();
		}
	}
	
	// Function to remove a TO-DO
	function removeToDo() {
		const shouldRemove = confirm("Do you want to remove this TO-DO?");
		if (shouldRemove) {
			this.remove();
			saveToCookie();
		}
	}
	
	// Function to save the TO-DOs as cookies
	function saveToCookie() {
		const todos = [];
		const todoElements = document.querySelectorAll("#ft_list > div");
		for (const todo of todoElements) {
			todos.push(todo.textContent);
		}
		const todoListString = JSON.stringify(todos);
		document.cookie = `todoList=${todoListString}; max-age=31536000; SameSite=None; Secure; path=/`;
	}
	
	// Function to load TO-DOs from cookies
	function loadFromCookie() {
		//removing the todolist from the cookie
		const cookieValue = document.cookie.replace(
			/(?:(?:^|.*;\s*)todoList\s*=\s*([^;]*).*$)|^.*$/,
			"$1"
		);
		//const cookieValue = document.cookie;
		console.log(document.cookie);
		console.log(cookieValue);
		if (cookieValue) {
			const todos = JSON.parse(cookieValue);
			for (const todoText of todos) {
				const todoDiv = document.createElement("div");
				todoDiv.textContent = todoText;
				todoDiv.addEventListener("click", removeToDo);
				document.getElementById("ft_list").append(todoDiv);
			}
		}
	}
	
	// Attach event listeners
	document.getElementById("newButton").addEventListener("click", createToDo);
	
	// Load TO-DOs from cookies when the page loads
	loadFromCookie();
}