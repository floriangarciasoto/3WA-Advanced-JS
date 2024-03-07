import { v4 as uuidv4 } from "uuid";
import { getTodos, setTodos } from "./lib/storage/localStorage";
import { getTodoHTML } from "./lib/DOM/display";

const todos = getTodos();

const todosList = document.querySelector('#todos-list');
const todosSl = document.querySelector('#todos-sl');
const form = document.querySelector('form');

function init() {

	for (id in todos) {
		todosList.innerHTML += getTodoHTML(id,todos[id]);
		todosSl.innerHTML += `<option value="${id}">`+todos[id]['name']+`</option>`;
	}

	todosSl.addEventListener('change',(e) => {
		console.log(e.target.value);
	});

	form.addEventListener('submit',function(e){

		e.preventDefault();

		const formData = new FormData(form);
		const todo = {};
		for (var [key, value] of formData.entries()) todo[key] = value;
		const {name, priority, description, duedate} = todo;

		const todoID = uuidv4();
		todosList.innerHTML += getTodoHTML(todoID,todo);

		todos[todoID] = todo;
		setTodos(todos);

	});
	
}

init();
