//Task1:
// - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )
const man = {
    name: 'Vasya',
    age : 25,
    car: false
}

const house = {
    yearOfBuild: 2010,
    constructor: 'Petro Ivanovich',
    rooms: 5
}

const car = {
    model: 'Ford',
    owner: true,
    year: 2015,
}

const dog = {
    breed: 'Pitbull',
    weight: 10,
    sex: 'male'
}

const guitar = {
    brand: 'Gibson',
    type: 'Les Paul',
    bodyType: 'Solid'
}


//Task2:
// - создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
const human = {
    name: 'Igor',
    job: ['Builder', 'Engineer'],
    car: {
        brand: 'Ford',
        model: 'Focus',
        year: '2012'
    }
}

const driver = {
    driver: {
        name: 'Max',
        age: 23,
    },
    car: ['Ford', 'Volkswagen'],
    crashes: 2,
    license: true,
    practice: '2 years'
}

const toy = {
    manufacturer: {
        country: 'China',
        city: 'Guangzhou'
    },
    material: 'wood',
    age: 5,
    owners: ['Ivan', 'Vasyl'],
    name: 'Bobby'
}

const table = {
    manufacturer: {
        country: 'Ukraine',
        city: 'Uzhgorod'
    },
    material: ['Glass', 'Steal'],
    owner: true,
    age: 1,
    style: 'HighTech'
}

const bag = {
    brand: {
        name: 'High Sierra',
        country: 'USA'
    },
    model: 'Flex 25',
    sizes: ['M', 'XL'],
    condition: 'New',
    owner: false
}

//Task3:
// - При помощи for in вывести все ключи всех объектов из задания 1 и 2
//Task3.1
for (let keys in man) {
    console.log(keys);
}
for (let keys in house) {
    console.log(keys);
}
for (let keys in car) {
    console.log(keys);
}
for (let keys in dog) {
    console.log(keys);
}
for (let keys in guitar) {
    console.log(keys);
}
//Task3.2
for (let keys in driver) {
    console.log(keys);
}
for (let keys in toy) {
    console.log(keys);
}
for (let keys in table) {
    console.log(keys);
}
for (let keys in bag) {
    console.log(keys);
}
for (let keys in human) {
    console.log(keys);
}

//Task4
// - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2

//4.1
console.log(Object.keys(man));
console.log(Object.keys(house));
console.log(Object.keys(car));
console.log(Object.keys(dog));
console.log(Object.keys(guitar));

//4.2
console.log(Object.keys(driver));
console.log(Object.keys(toy));
console.log(Object.keys(table));
console.log(Object.keys(bag));
console.log(Object.keys(human));


//Task5:
// - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)
let cars = [];
cars.push({
    model: 'Ford Focus',
    year: 2012,
    power: 157,
    color: 'silver'
});

cars.push({
    model: 'Volkswagen Golf',
    year: 2015,
    power: 200,
    color: 'balck'
});

cars.push({
    model: 'Skoda Octavia',
    year: 2016,
    power: 150,
    color: 'White'
});

cars.push({
    model: 'Renault Megan',
    year: 2010,
    power: 100,
    color: 'yellow'
});

cars.push({
    model: 'Hyundai SantaFe',
    year: 2019,
    power: 250,
    color: 'black'
});

cars.push({
    model: 'Suzuki Jimny',
    year: 2020,
    power: 350,
    color: 'green'
});

cars.push({
    model: 'Toyota Corolla',
    year: 2009,
    power: 145,
    color: 'silver'
});

cars.push({
    model: 'Tesla Model S',
    year: 2020,
    power: 400,
    color: 'red'
});

cars.push({
    model: 'Chevrolet Volt',
    year: 2015,
    power: 350,
    color: 'lime'
});

cars.push({
    model: 'Volkswagen Passat',
    year: 2015,
    power: 300,
    color: 'brown'
});

console.log(cars);

//Task6:
// - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)

let cities = [];

cities.push({
    name: 'Lviv',
    population: 1000000,
    country: 'Ukraine',
    region: 'Lviv'
})
cities.push({
    name: 'Kiev',
    population: 3000000,
    country: 'Ukraine',
    region: 'Kiev'
})
cities.push({
    name: 'Moscow',
    population: 6000000,
    country: 'Russia',
    region: 'Moscow'
})

cities.push({
    name: 'Minsk',
    population: 3000000,
    country: 'Belarusian',
    region: 'Minsk'
})

//Task7:
// - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.

let secondCars = [];

secondCars.push({
    model: 'Volkswagen Golf 4',
    year: 2018,
    power: 300,
    color: 'pink',
    driver: {
        name: 'Max',
        age: 23,
        sex: 'male',
        practice: 4
    }
})

secondCars.push({
    model: 'Deawoo Lanos',
    year: 2010,
    power: 100,
    color: 'green',
    driver: {
        name: 'Bodya',
        age: 35,
        sex: 'male',
        practice: 10
    }
})

secondCars.push({
    model: 'Volkswagen Passat',
    year: 2015,
    power: 200,
    color: 'white',
    driver: {
        name: 'Ivan',
        age: 21,
        sex: 'male',
        practice: 1
    }
})

//Task8:
// - проитерировать каждый массив из задания 5,6,7 при помощи while.
let i = 0;
while ( i < cars.length) {
    console.log(cars[i]);
    i++
}

let iSec = 0;
while (iSec < cities.length) {
    console.log(cities[iSec]);
    iSec++
}

let iThr = 0;
while (iThr < secondCars.length) {
    console.log(secondCars[iThr]);
    iThr++
}

//Task9:
// - проитерировать каждый массив из задания 5,6,7 при помощи for .

for (let j = 0; j < cars.length; j++) {
    console.log(cars[j]);
}

for (let j = 0; j < cities.length; j++) {
    console.log(cities[j]);
}

for (let j = 0; j < secondCars.length; j++) {
    console.log(secondCars[j]);

}

// Task10:
// - проитерировать каждый массив из задания 5,6,7 при помощи  for of.

for (let carsEl of cars) {
    console.log(carsEl)
}

for (let citiesEl of cities) {
    console.log(citiesEl);
}

for (let secCarsEl of secondCars) {
    console.log(secCarsEl);
}

//Task11:
//- взять объекты из задания 1 и превратить каждый в json.

let jsonMan = JSON.stringify(man);
let jsonHouse = JSON.stringify(house);
let jsonCar = JSON.stringify(car);
let jsonDog = JSON.stringify(dog);
let jsonGuitar = JSON.stringify(guitar);


// - взять json из задания 11 и превратить их обратно в объекты.


let parsedMan = JSON.parse(jsonMan);
let parsedHouse = JSON.parse(jsonHouse);
let parsedCar = JSON.parse(jsonCar);
let parsedDog = JSON.parse(jsonDog);
let parsedGuitar = JSON.parse(jsonGuitar);


// - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .

for (let carsField of cars) {
    JSON.stringify(carsField);
    console.log(carsField);
}

// - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .
// - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив
//
// - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
// let users = [{name: 'vasya', age: 31, status: false, skills: ['java', 'js']}, {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']}, {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']}, {name: 'olya', age: 28, status: false, skills: ['java', 'js']}, {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}];
//
//
//
// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
//
// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];
//
//
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
// let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Частковий приклад реультату:
//     let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]
//
//
//
//
//
// - створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу
// - змінити цей текст використовуючи селектори id, class,  tag
// - змінити висоту та ширину блоку використовуючи селектори id, class,  tag
// - за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені
// - за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені
// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені
// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt
//
// --Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні доступи та дії
// - знайти всі елементі, які мають class
// - знайти всі параграфи ,та змінити текст на hello oktenweb!
//     - знайти всі div та змінити ім колір на червоний
//
// ============
// ====class===
//     ============
//ClassTask1
//     - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//     створити скрипт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.

let hTwoEl = document.getElementsByTagName('h2');
let contentEl = document.getElementById('content')

let ulElement = document.createElement('ul')

console.log(ulElement);

for (let hTwoField of hTwoEl ) {

    console.log(hTwoField);

}

// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
//
// let rules = [
//     {
//         title: 'Первое правило Бойцовского клуба.',
//         body: 'Никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Второе правило Бойцовского клуба.',
//         body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Третье правило Бойцовского клуба.',
//         body: 'В схватке участвуют только двое.'
//     },
//     {
//         title: 'Четвертое правило Бойцовского клуба.',
//         body: 'Не более одного поединка за один раз.'
//     },
//     {
//         title: 'Пятое правило Бойцовского клуба.',
//         body: 'Бойцы сражаются без обуви и голые по пояс.'
//     },
//     {
//         title: 'Шестое правило Бойцовского клуба.',
//         body: 'Поединок продолжается столько, сколько потребуется.'
//     },
//     {
//         title: 'Седьмое правило Бойцовского клуба.',
//         body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//     },
//     {
//         title: 'Восьмое и последнее правило Бойцовского клуба.',
//         body: 'Новичок обязан принять бой.'
//     },
//
// ];
//
//
//
//
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі users. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт в свій блок (блок в блоці).
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі posts. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі comments. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
// ****** при помощи fetch (как в примере) получить от jsonplaceholder все posts. Внутри последнего then() сделать еще один fetch который сделает запрос и получит все comments. Объеденить соответсвующий post с соответсвующими comment и вывести в браузер. Подсказка : в каждом comment есть поле postId которое определяет какой комментарий принадлежит какому посту
