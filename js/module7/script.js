//Task1:
// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

// let myForm = document.forms.myForm;
// let h1T = document.getElementById('text')
//
// myForm.clearBtn.onclick = (event) => {
//     event.preventDefault();
//     h1T.innerText = '';
// }

//Task2:
//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// myForm.hideBtn.onclick = (event) => {
//     event.preventDefault();
//     myForm.hideBtn.style.display = 'none';
// }

//Task3:
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

// let ageText = myForm.ageForm;
// let ageBtn = myForm.ageBtn;
//
// ageBtn.onclick = () => {
//     if (ageText.value >= 18) {
//         alert('you are good!');
//     } else {
//         alert('dont touch this');
//     }
// }

//Task4:
// - Создайте меню, которое раскрывается/сворачивается при клике

// let menu = document.getElementById('menu');
// let fieldsOfMenu = document.getElementById('menuFields');
//
// menu.onclick = () => {
//     if (fieldsOfMenu.style.display === 'none') {
//         fieldsOfMenu.style.display = 'block';
//     } else {
//         fieldsOfMenu.style.display = 'none'
//     }
//
// }


//Task5:
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

// let comments = [{title : 'Title One', body:'Comment One other text'}, {title : 'Comment Two', body:'Comment Two text'},
//                 {title : 'Title Three', body:'Comment three some text'},  {title : 'Comment Four', body:'Comment Four Text'},]
//
// for (const comment of comments) {
//     let divEl = document.createElement('div')
//     divEl.innerText = `Title: ${comment.title}
//                        Comment: ${comment.body}`
//     document.body.appendChild(divEl)
// }


//Task6:
// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// let formOne = document.forms.myFirstForm;
// let formTwo = document.forms.mySecondForm;
// let goBtn = document.getElementById('goBtn');
//
// goBtn.onclick = () => {
//     let firstText = formOne.firstSomeText.value;
//     let secondText = formTwo.secondSomeText.value;
//
//     let someText = {
//         firstText, secondText
//     }
//
//     console.log(someText);
// }

//Task7:
// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кліькіть ячеєк в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.





//Task7.1
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)



//Task8
// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.


//Task9
// - Сворити масив слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

// let words = ['kit', 'kitchen', 'clinic', 'captivate', 'force', 'ladder', 'plastic', 'splurge', 'sail', 'nature' ]
//
// let thrForm = document.forms.myThrForm;
// let exWords = thrForm.exWords;
// let exBtn = thrForm.wordsBtn;
//
// exBtn.onclick = () => {
//     for (const word of words) {
//         if (word === exWords.value) {
//             alert('Warning!')
//         }
//     }
// }

//Task10
// - Сворити масив слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі слова з масиву.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку





// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
//     При клике на пункт оглавления вы должны отправляться к этому пункту в тексте



//Task12:
// -- взять массив пользователей
let usersWithAddress = [
    {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ



let jsonUsers = JSON.stringify(usersWithAddress);
let jsonDiv = document.createElement('div')
jsonDiv.innerText = jsonUsers;
document.body.appendChild(jsonDiv)

let checkForms = document.forms.users;

let checkStatus = checkForms.falseStatus;
let checkAge = checkForms.age;
let checkCity = checkForms.city;



// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне
//
//
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан