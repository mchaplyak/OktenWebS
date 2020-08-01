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

let myForm = document.getElementById('firstForm')
getDataStorage(myForm)
function saveData(data) {
saveDataStorage(data)
}

function saveDataStorage (d) {
    for (let i = 0; i < d.length; i++) {
        const dEl = d[i];
        if (dEl.type === 'checkbox' || dEl.type === 'radio')
            dEl.checked ? dEl.value = true : dEl.value = false;

       localStorage.setItem(dEl.id, dEl.value);
    }
}

function getDataStorage(g) {
    for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.hasOwnProperty(g.children[i].id)) {
            g.children[i].value = localStorage.getItem(g.children[i].id)
            if (g.children[i].value === 'true') {
                g.children[i].setAttribute('checked', 'checked');
            }
        }
    }
}


// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).

const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');
const textAr = document.getElementById('text');
const saveBtn = document.getElementById('save');



// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
//     Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта
//
//
//
