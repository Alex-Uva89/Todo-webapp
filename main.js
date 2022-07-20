
'use strict';

const inputString = document.getElementById('js-todo-input');
const addBtn = document.getElementById('todo-add');
const mainContainer = document.getElementById('todo-output-container');

addBtn.addEventListener('click', createTodo);


let arrayTodo = [];

function createTodo(){
    if (inputString.value === ""){
        alert('Inserisci per favore un Todo');
    } else {
        // creo il LI
        const li = mainContainer.appendChild(document.createElement('li'));
        li.classList.add('todo-item');
        // creo il DIV
        const divList = li.appendChild(document.createElement('div'));
        divList.classList.add('todo');
        divList.innerHTML = inputString.value;

        //creo il bottone delete

        let containerFlex = li.appendChild(document.createElement('div'));
        containerFlex.classList.add('flex');

        const x = containerFlex.appendChild(document.createElement('button'));
        x.classList.add('delete-output');
        x.innerHTML = `delete`;
        x.addEventListener('click', () => {
            mainContainer.removeChild(li);
            
        });

        const done = containerFlex.appendChild(document.createElement('input'));
        done.classList.add('done');
        done.type = 'checkbox';

        let todoSave = {
            text: divList.innerHTML,
            isDone: done.checked
        }

        arrayTodo.push(todoSave)

        // salvare arrayTodo dentro il localStorage 

        localStorage.setItem('todo', JSON.stringify(arrayTodo));
        
    
    }
    
}


// funzione per caricare i todo dal localStorage
localStorage.getItem('todo') ? arrayTodo = JSON.parse(localStorage.getItem('todo')) : arrayTodo = [];

//funzione per mostrare i dati contenuti nell'array come todo

if(arrayTodo.length > 0){
    arrayTodo.forEach(element => {
        const li = mainContainer.appendChild(document.createElement('li'));
        li.classList.add('todo-item');
        // creo il DIV
        const divList = li.appendChild(document.createElement('div'));
        divList.classList.add('todo');
        divList.innerHTML = element.text;
        //creo il bottone delete
        let containerFlex = li.appendChild(document.createElement('div'));
        containerFlex.classList.add('flex');
        const x = containerFlex.appendChild(document.createElement('button'));
        x.classList.add('delete-output');
        x.innerHTML = `delete`;
        x.addEventListener('click', () => {
            mainContainer.removeChild(li);
        }
        );
        const done = containerFlex.appendChild(document.createElement('input'));
        done.classList.add('done');
        done.type = 'checkbox';
        done.checked = element.isDone;
    }
    );
}






// localStorage.clear();






