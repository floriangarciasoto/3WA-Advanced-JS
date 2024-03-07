export function getTodoHTML(todoID,todo) {
	const {name, priority, description, duedate} = todo;
	return `
	<fieldset>
		<legend>${todoID}</legend>
		<h2>${name}</h2>
		<p>Priorité : <span>`+['Pas urgent','Normal','Urgent'][priority]+`</span></p>
		<p>${description}</p>
		<p>A faire pour le <span>${duedate}</span></p>		
	</fieldset>
	`;
}
