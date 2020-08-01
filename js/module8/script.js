// - Дана textarea.
//     В неё вводится текст.
//     Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.

let testText = document.getElementById("contentArea");

testText.oninput = (event) => {
    localStorage.setItem('textArea', event.target.value);
}

testText.value = localStorage.getItem('textArea')

// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
//     Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
//     Сделайте ваш скрипт как можно более универсальным.

// let myForm = document.getElementById('firstForm')
// getDataStorage(myForm)
// function saveData(data) {
// saveDataStorage(data)
// }
//
// function saveDataStorage (d) {
//     for (let i = 0; i < d.length; i++) {
//         const dEl = d[i];
//         if (dEl.type === 'checkbox' || dEl.type === 'radio')
//             dEl.checked ? dEl.value = true : dEl.value = false;
//
//        localStorage.setItem(dEl.id, dEl.value);
//     }
// }
//
// function getDataStorage(g) {
//     for (let i = 0; i < localStorage.length; i++) {
//         if (localStorage.hasOwnProperty(g.children[i].id)) {
//             g.children[i].value = localStorage.getItem(g.children[i].id)
//             if (g.children[i].value === 'true') {
//                 g.children[i].setAttribute('checked', 'checked');
//             }
//         }
//     }
// }


// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).

// const leftBtn = document.getElementById('left');
// const rightBtn = document.getElementById('right');
// const textAr = document.getElementById('text');
// const saveBtn = document.getElementById('save');
//
// let count = 0
// saveBtn.onclick = () => {
//     localStorage.setItem(count, textAr.value)
//     count++
// }
//
// leftBtn.onclick = () => {
//     let i = 0;
//     for (const data in localStorage) {
//         if (localStorage.hasOwnProperty(data)) {
//             if (localStorage.getItem(data) === textAr.value) {
//                 i = data;
//             }
//         }
//     }
//     textAr.value = localStorage.getItem(i - 1);
// }
// rightBtn.onclick = () => {
//     let i = 0;
//     for (const data in localStorage) {
//         if (localStorage.hasOwnProperty(data)) {
//             if (localStorage.getItem(data) === textAr.value) {
//                 i = data;
//             }
//         }
//     }
//     textAr.value = localStorage.getItem(+i + 1);
// }


// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
//     Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта
//
//

let usersBlock = document.getElementById('users')
const users = [{
    name: 'Max',
    phone: 11111
    },
    {
    name: 'Vova',
    phone: 22222
    },
    {
    name: 'Bodya',
    phone: 33333
    }];


localStorage.setItem('users', JSON.stringify(users));

const nameTwo = document.getElementById('nameTwo');
const phoneTwo = document.getElementById('phoneTwo');
const save = document.getElementById('saveBtn');

const divUser = document.createElement('div');
const editForm = document.getElementById('edit')
const nameEd = document.getElementById('nameEdit');
const phoneEd = document.getElementById('phoneEdit');
const saveEd = document.getElementById('saveEdit');

newUser();

save.onclick = () => {
    const  name = nameTwo.value;
    const  phone = phoneTwo.value;

    users.push({name, phone})
    newUser()
}

function newUser() {
    usersBlock.innerHTML = '';

    let item = localStorage.getItem('users');
    const users = JSON.parse(item)

    users.forEach(({name, phone}, id) => {
        const divBtn = document.createElement('div');
        const editBtn = document.createElement('button');
        const removeBtn = document.createElement('button');


        removeBtn.innerText = '|Remove|'
        editBtn.innerText = '|Edit|'
        divUser.innerText= `№: ${id+1} | Name: ${name} | Phone: ${phone}`
        divUser.style.backgroundColor = 'silver';
        divUser.style.margin = '10px';


        removeBtn.onclick = () => {
            users.splice(id, 1);
            localStorage.setItem('users', JSON.stringify(users));
            newUser()
        }

        editBtn.onclick = () => {
            edit({name, phone}, id);
        }

        divBtn.appendChild(removeBtn)
        divBtn.appendChild(editBtn)
        divUser.appendChild(divBtn)

        usersBlock.appendChild(divUser)
    })
}

function edit({name, phone}, id) {
    editForm.style.display = 'block';

    nameEd.value = name;
    phoneEd.value = phone;

    saveEd.onclick = () => {
        users[id].name = nameEd.value;
        users[id].phone = phoneEd.value;

        localStorage.setItem('users', JSON.stringify(users))

        newUser()

        editForm.style.display = 'none';
    }
}
