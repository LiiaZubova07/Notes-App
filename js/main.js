const mainEl = document.querySelector('.main');

//1 - написать  функцию createNote
//2 - добавить кнопку и обработчик на добавление карточки

function createNote(title, text) {
  const noteEl = document.createElement('div');
  noteEl.classList.add('note');
  noteEl.innerHTML = `
	<div class = 'note-header'>
<p>${title}</p>
<div class = "note-actions">
<button class = 'note-edit'><i class="fa-regular fa-pen-to-square"></i></button>
<button class = 'note-delete'><i class="fa-regular fa-trash"></i></button>
</div>
	</div>
	
	<p id = 'note-description'>${text}</p>`;
}
