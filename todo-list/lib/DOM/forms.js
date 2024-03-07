import { v4 as uuidv4 } from 'uuid';
import { setTodos } from "../storage/localStorage";

export function getFormHTML(todo=null) {
	if (todo) {
		const {name, description, dueDate, priority} = todo;
		return `
		Nom : <input type="text" name="name" value="${name}"><br>
		Description : <input type="text" name="description" value="${description}"><br>
		A faire pour le <input type="text" name="duedate" value="${dueDate}"><br>
		Priorité : <select name="priority">
			<option value="0"`+(priority === 0 ? ' selected' : '' )+`>Pas urgent</option>
			<option value="1"`+(priority === 1 ? ' selected' : '' )+`>Normal</option>
			<option value="2"`+(priority === 2 ? ' selected' : '' )+`>Urgent</option>
		</select><br>
		<button class="cancel-edit non-listened">Annuler</button> <button class="todo-submit non-listened">OK</button>
		`;
	}
	return `
	Nom : <input type="text" name="name"><br>
	Description : <input type="text" name="description"><br>
	A faire pour le <input type="text" name="duedate"><br>
	Priorité : <select name="priority">
		<option value="0">Pas urgent</option>
		<option value="1">Normal</option>
		<option value="2">Urgent</option>
	</select><br>
	<button class="cancel-edit non-listened">Annuler</button> <button class="todo-submit non-listened">OK</button>
	`;
}

export function getTodoHTML(todo) {
	const {name, description, dueDate, priority} = todo;
	return `
	<fieldset id="todo-create">
		<div id="create-todo-btn-dv" class="non-edit">
			<h2>${name}</h2>
			<p>Priorité : <span>`+['Pas urgent','Normal','Urgent'][priority]+`</span></p>
			<p>${description}</p>
			<p>A faire pour le <span>${dueDate}</span></p>		
		</div>
		<form class="edit">`+getFormHTML(todo)+`</form>
	</fieldset>
	`;
}

export function addSubmitTodoFormsEventListeners() {

	document.querySelectorAll('.todo-submit.non-listened').forEach(element => {
		element.addEventListener('click',e => {
	
			e.preventDefault();

			const todoDv = e.target.parentNode.parentNode;
			const form = e.target.parentNode;

			const formData = new FormData(form);

			console.log(form);
			console.log(formData.entries());

			if (todoDv.id === 'todo-create') {
				console.log(uuidv4());
			}
			else {

			}

			

			// setTodos();

		});
		element.classList.remove('non-listened');
	});

}
