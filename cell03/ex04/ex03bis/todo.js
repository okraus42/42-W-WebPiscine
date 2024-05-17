
window.onload = function() {
function newToDo() {
		const todoText = prompt("Enter a new TO-DO:");
		if (todoText) {
			const todoDiv = $("<div>").text(todoText);
			todoDiv.textContent = todoText;
			todoDiv.click(delToDo);
			$("#ft_list").prepend(todoDiv);
			saveToCookie();
		}
	}
	
	function delToDo() {
		const shouldRemove = confirm("Do you want to remove this TO-DO?");
		if (shouldRemove) {
			$(this).remove();
			saveToCookie();
		}
	}
	
	function saveToCookie() {
		const todos = [];
		const todoElements = document.querySelectorAll("#ft_list > div");
		$("#ft_list > div").each(function() {
			todos.push($(this).text());
		});
		console.log(todos);
		const todoListString = JSON.stringify(todos);
		console.log(todoListString );
		document.cookie = `todoList=${todoListString}; max-age=31536000; SameSite=None; Secure; path=/`;
	}
	
	function loadFromCookie() {
		//removing the todolist from the cookie
		const cookieValue = document.cookie.substring(9);

		console.log(document.cookie);
		console.log(cookieValue);
		if (cookieValue) {
			const todos = JSON.parse(cookieValue);
			for (const todoText of todos) {
				const todoDiv = $("<div>").text(todoText);
				todoDiv.click(delToDo);
				$("#ft_list").append(todoDiv);
			}
		}
	}
	
	$("#newButton").click(newToDo);
	
	loadFromCookie();
}