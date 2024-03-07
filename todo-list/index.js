import { getTodos } from "./lib/storage/localStorage";
import { getFormHTML, addSubmitTodoFormsEventListeners } from "./lib/DOM/forms";
import { addDisplayTodoFormsEventListeners } from "./lib/DOM/display";

const todos = getTodos();

function init() {

	document.querySelector('#todo-create form').innerHTML = getFormHTML();

	addDisplayTodoFormsEventListeners();
	addSubmitTodoFormsEventListeners();
	
}

init();
