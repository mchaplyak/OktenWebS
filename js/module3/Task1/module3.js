// TaskOne:
// -- створити об'єкт (не меньше 5ти властивостей) який описує
// - собаку
// - людину
// - автомобіль
// - квартиру
// - книгу

const dogOne = {
    name: 'Buddy',
    age: 3,
    breed: 'Gold Retriever',
    weight: 20,
    owner: true,
}

const humanOne = {
    name: 'Max',
    age: 23,
    height: 174,
    car: false,
    dog: false
}

const carOne = {
    brand: 'Ford',
    model: 'Focus',
    year: '2011',
    owner: true,
    color: 'silver'
}

const apartmentOne = {
    city: 'Lviv',
    buildYear: '2010',
    rooms: 2,
    square: 40,
    owner: true
}

const bookOne = {
    name: 'Murder on the Orient Express',
    writer: 'Agatha Christie',
    year: 1934,
    language: 'English',
    ganre: 'Crime Novel'
}


//Task2:
// -- Створити масив та вивести його в консоль:
//     - з 5 собак
// - 3 5 людей
// - з 5 автомобілів
//

let arrDogs = [
    dogOne,
    {name: 'Charlie', age: 1, owner: true},
    {name:'Oscar', age: 5, owner: false},
    {name: 'Milo', age:2, owner: false},
    {name: 'Toby', age: 4, owner: true}
];

//Task3:
// -- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// - будинок
// - водій
// - іграшку
// - стіл
// - сумка

const houseOne = {
    city: {
        name: 'Mykolaiv',
        region: 'Lviv',
    },
    owners: ['Maxym', 'Andriy', 'Tamara'],
    square: 200,
    rooms: 6,
    pool: true,
}

const driverOne = {
    driver: {
        name: 'Max',
        age: 23,
    },
    car: ['Ford', 'Volkswagen'],
    crashes: 2,
    license: true,
    practice: '2 years'
}

const toyOne = {
    manufacturer: {
        country: 'China',
        city: 'Guangzhou'
    },
    material: 'wood',
    age: 5,
    owners: ['Ivan', 'Vasyl'],
    name: 'Bobby'
}

const tableOne = {
    manufacturer: {
        country: 'Ukraine',
        city: 'Uzhgorod'
    },
    material: ['Glass', 'Steal'],
    owner: true,
    age: 1,
    style: 'HighTech'
}

const bagOne = {
    brand: {
        name: 'High Sierra',
        country: 'USA'
    },
    model: 'Flex 25',
    sizes: ['M', 'XL'],
    condition: 'New',
    owner: false
}

//Task4:
// Дан массив:
// - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// - статус Андрія
// - статус Максима
// - ім'я передостаннього об'єкту
// - ім'я третього об'єкта
// - вік Олега
// - вік Олі
// - вік + ім'я 5го об'єкта
// - вік + сатус Анни
// Приклад: вивести ім'я 1го об'єкта. Відповідь: console.log (users [0] .name). Будьте уважні! 4й об'єкт має індес 3!

    let users = [
        {name: 'vasya', age: 31, status: false},
        {name: 'petya', age: 30, status: true},
        {name: 'kolya', age: 29, status: true},
        {name: 'olya', age: 28, status: false},
        {name: 'max', age: 30, status: true},
        {name: 'anya', age: 31, status: false},
        {name: 'oleg', age: 28, status: false},
        {name: 'andrey', age: 29, status: true},
        {name: 'masha', age: 30, status: true},
        {name: 'olya', age: 31, status: false},
        {name: 'max', age: 31, status: true}
    ];

console.log(users);
console.log(users[7].status);
console.log(users[4].status);
console.log(users[users.length-2].name);
console.log(users[4].name);
console.log(users[6].age);
console.log(users[3].age);
console.log(`Age: ${users[4].age}, name: ${users[4].name}`)
console.log(`Age: ${users[5].age}, status: ${users[5].status}`)



//Task5:
// -Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.

// -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// - отримує текст з параграфа з id "content"
// - отримує текст з блоку з id "rules"
// - замініть текст параграфа з id 'content' на будь-який інший
// - замініть текст параграфа з id 'rules' на будь-який інший
// - змініть кожному елементу колір фону на червоний
// - змініть кожному елементу колір тексту на синій
// - отримати весь список класів елемента з id=rules і вивести їх в console.log
// - отримати всі елементи з класом fc_rules
// - поміняти колір тексту у всіх елементів fc_rules на червоний?

let contentId = document.getElementById("content");
console.log(contentId);

let rulesId = document.getElementById('rules')
console.log(rulesId);

contentId.innerText = ('other text, other text, other text, other text, other text, other text, other text, ')
rulesId.innerText = ('second other text, second other text, second other text, second other text, ')

contentId.style.backgroundColor = ('red')
rulesId.style.backgroundColor = ('red')

contentId.style.color = ('blue')
rulesId.style.color = ('blue')

console.log(rulesId.classList)

const fcRulesElem = document.getElementsByClassName('fc_rules')
console.log(fcRulesElem);

// ====================
// ====================
// ====================
//
