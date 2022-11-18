const notesEl = document.querySelector('.notes');
const addBtn = document.querySelector('.note-add');

//1 - написать  функцию createNote
//2 - добавить кнопку и обработчик на добавление карточки

function createNote(title, text) {
  const noteEl = document.createElement('div');
  noteEl.classList.add('note');
  noteEl.innerHTML = `
	<div class = 'note-header'>
<p id = "note-title">${title}</p>
<textarea id = 'note-textarea' class= 'hidden'>${text}</textarea>
<div>
<button class ='note-edit'><i class="fa-solid fa-pen-to-square"></i></button>
<button class ='note-delete'><i class="fa-solid fa-trash"></i></button>
</div>
	</div>
	
	<textarea id = 'note-textarea' class= 'hidden'>${text}</textarea>`;
}

addBtn.addEventListener('click', (e) => {
  const el = createNote('Заголовок', 'Ваш текст');
  notesEl.appendChild(el);
});

