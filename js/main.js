const addBtn = document.getElementById('add-btn');
const noteInner = document.querySelector('.note-inner');


const addNote = (text = '') => {
    const noteWrap = document.createElement('div')
    noteWrap.classList.add('in-note-wrap');

    const htmlData = `
    <div class="operation">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>
    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}"></textarea>
    `;

    noteWrap.insertAdjacentHTML('afterbegin', htmlData);

    const edit = noteWrap.querySelector('.edit')
    const delBtn = noteWrap.querySelector('.delete')
    const main = noteWrap.querySelector('.main')
    const textarea = noteWrap.querySelector('textarea')

    delBtn.addEventListener('click', () => {
        noteWrap.remove();
    })

    // textarea.value = text;
    // main.innerHTML = text

    edit.addEventListener('click', () => {
        main.classList.toggle('hidden')
        textarea.classList.toggle('hidden')
    })

    textarea.addEventListener('change', (event) => {
        const value = event.target.value
        main.innerHTML = value;

    })


    noteInner.appendChild(noteWrap)
}

addBtn.addEventListener('click', () => addNote())