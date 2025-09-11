const input = document.querySelector('#favchap');
const addBtn = document.querySelector('#addBtn');
const list = document.querySelector('#list');


function addChapter() {

    if (input.value.trim() !== '') {

        const li = document.createElement('li');
        li.textContent = input.value.trim();


        const deleteButton = document.createElement('button');
        deleteButton.type = 'button';
        deleteButton.setAttribute('aria-label', 'Delete chapter');
        deleteButton.textContent = '❌';


        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });


        li.appendChild(deleteButton);
        list.appendChild(li);


        input.value = '';
    } else {

    }


    input.focus();
}


addBtn.addEventListener('click', addChapter);


input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        addChapter();
    }
});