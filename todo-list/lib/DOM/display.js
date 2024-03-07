export function addDisplayTodoFormsEventListeners() {

	document.querySelectorAll('.show-edit.non-listened, .cancel-edit.non-listened').forEach(element => {
		element.addEventListener('click',e => {
			
			e.preventDefault();
			e.target.parentNode.parentNode.classList.toggle('in-edit');
			
		});
		element.classList.remove('non-listened');
	});

}

