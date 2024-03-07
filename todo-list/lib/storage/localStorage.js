export function getTodos() {
	let todosInStorage = localStorage.getItem('todos');
	if (todosInStorage === 'undefined') todosInStorage = '{}';
	return JSON.parse(todosInStorage);
}

export function setTodos(todos) {
	return localStorage.setItem('todos',JSON.stringify(todos));
}
