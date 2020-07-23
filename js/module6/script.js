// - создать массив с 20 числами.
let arrOne = [25, 65, 44, 2, 54, 32, 100, 987, 23, 45]
console.log(arrOne);

//Task1:
// -- при помощи метода sort и колбека  отсортировать массив.

let sort = arrOne.sort ((a, b) => {
    return a - b;
});

console.log(sort);

//Task2:
// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
let returnSort = arrOne.sort((a,b) => {
    return b - a;
});

console.log(returnSort);

//Task3:
// -- при помощи filter получить числа кратные 3
let filterOne = arrOne.filter(value => {
    return !(value % 3)
});

console.log(filterOne);

//Task4:
// -- при помощи filter получить числа кратные 10

let filterTwo = arrOne.filter(value => {
    return !(value % 10)
});

console.log(filterTwo);

// Task5:
// -- перебрать (проитерировать) массив при помощи foreach()

arrOne.forEach(value => {
    console.log(value);
});
// Task6:
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше

let arrTwo = [];
arrOne.map(value => {
   return arrTwo.push(value * 3)
});

console.log(arrTwo);

// - создать массив со словами на 15-20 элементов.

let arrString = ['go', 'construct', 'rock', 'confuse', 'pass', 'extraterrestrial', 'card', 'depend', 'tube', 'woman',
                 'glue', 'cold', 'model', 'burial', 'texture', 'cave', 'pool', 'illustrate', 'hang', 'lecture'];
console.log(arrString);
// Task8:
// -- отсортировать его по алфавиту в восходящем порядке.
let sortString = arrString.sort((a, b) => (a > b) ? 1 : -1)
console.log(sortString);

//Task9:
// -- отсортировать его по алфавиту  в нисходящем порядке.
let sortStringReverse = arrString.sort((a, b) => (a > b) ? -1 : 1)

console.log(sortStringReverse);

//Task10:
// -- отфильтровать слова длиной менее 4х символов

let arrStringFourCh = arrString.filter (value => value.length <= 4)

console.log(arrStringFourCh);

//Task11:
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце

let newArrString = arrString.map(value => value+`!`)

console.log(newArrString);

// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :

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

//Task12:
// - відсортувати його за  віком (зростання , а потім окремо спадання)
users.sort((a, b) => {
    return a.age - b.age;
})

console.log(users);


users.sort((a, b) => {
    return b.age - a.age;
})

console.log(users);

//Task13:
// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)

users.sort((a, b) => {
    return a.name.length - b.name.length
})

console.log(users);


users.sort((a, b) => {
    return b.name.length - a.name.length
})

console.log(users);

//
// =============================================
// =============================================
// =============КЛАССНАЯ РАБОТА=================
// =============================================
// =============================================
//
//
//
//
let cars = [{producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
            {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
            {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
            {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
            {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
            {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
            {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
            {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
            {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
            {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
            {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
            {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume: 3, power: 400},
            {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230} ];
// // Відфільтрувати масив за наступними крітеріями :

//Class1:
//     - двигун більше 3х літрів
let arrCarsThree = cars.filter(value => value.volume >= 3);

console.log(arrCarsThree);


//Class2:
// - двигун = 2л
//
let arrCarsTwo = cars.filter(value => value.volume === 2);

console.log(arrCarsTwo);

//Class3:
// - виробник мерс

let arrCarsMercedes = cars.filter(value => value.producer === 'mercedes');

console.log(arrCarsMercedes);


//Class4:
// - двигун більше 3х літрів + виробник мерседес

let arrCarsMercThree = cars.filter(value => value.volume >= 3 && value.producer === 'mercedes'  );

console.log(arrCarsMercThree);

//Class5:
// - двигун більше 3х літрів + виробник субару
//
let arrCarsSubaruThree = cars.filter(value => value.volume >= 3 && value.producer === 'subaru')

console.log(arrCarsSubaruThree);

//Class6
// - сили більше ніж 300

let arrCarsPowerThree = cars.filter(value => value.power === 300)

//Class7
// - сили більше ніж 300 + виробник субару
let arrCarsSubaruThree = cars.filter(value => value.power === 300 && value.producer === 'subaru' );

console.log(arrCarsSubaruThree);

//Class8:
// - мотор серіі ej

let carsEngineEj = cars.filter(value => value.engine.startsWith('ej'));

console.log(carsEngineEj);

//Class9:
// - сили більше ніж 300 + виробник субару + мотор серіі ej

let carsPowerSubaruEj = cars.filter(value => value.power >= 300 && value.producer === 'subaru' && value.engine.startsWith('ej'))

console.log(carsPowerSubaruEj);

//Class10:
// - двигун меньше 3х літрів + виробник мерседес

let carsThreeMerc = cars.filter(value => value.volume < 3 && value.producer === 'mercedes' );

console.log(carsThreeMerc);

//Class11:
// - двигун більше 2л + сили більше 250

let carsEnginePowerTwo = cars.filter(value => value.volume >= 2 && value.power >= 250);

console.log(carsEnginePowerTwo);

//Class12:
// - сили більше 250  + виробник бмв

let carsPowerBmw = cars.filter(value => value.producer === 'bmw' && value.power >= 250);

console.log(carsPowerBmw);


// - взять слдующий массив
let usersWithAddress = [{id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv',street: 'Shevchenko', number: 16}},
                        {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}},
                        {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
                        {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}},
                        {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
                        {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
                        {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}},
                        {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
                        {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}},
                        {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
                        {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}];

//Class13:
// -- отсортировать его по id пользователей

usersWithAddress.sort((a, b) => {
    return a.id - b.id
})

console.log(usersWithAddress);

//Class14:
// -- отсортировать его по id пользователей в обратном опрядке

usersWithAddress.sort((a, b) => {
    return b.id - a.id
})

console.log(usersWithAddress);

//Class15:
// -- отсортировать его по возрасту пользователей

usersWithAddress.sort((a, b) => {
    return a.age - b.age
})

console.log(usersWithAddress);

//Class16:
// -- отсортировать его по возрасту пользователей в обратном порядке

usersWithAddress.sort((a, b) => {
    return b.age - a.age
})

console.log(usersWithAddress);

//Class17:
// -- отсортировать его по имени пользователей

usersWithAddress.sort((a, b) => (a.name > b.name) ? 1 : -1)

console.log(usersWithAddress);

//Class18:
// -- отсортировать его по имени пользователей в обратном порядке

usersWithAddress.sort((a, b) => (a.name > b.name) ? -1 : 1);

console.log(usersWithAddress);

//Class19:
// -- отсортировать его по названию улицы  в алфавитном порядке

usersWithAddress.sort((a, b) => (a.address.street > b.address.street) ? 1 : -1 )

console.log(usersWithAddress);

//Class20:
// -- отсортировать его по номеру дома по возрастанию

usersWithAddress.sort((a, b) => a.address.number - b.address.number)

console.log(usersWithAddress);

//Class21:
// -- отфильтровать (оставить) тех кто младше 30

let usersThr = usersWithAddress.filter(value => value.age < 30);

console.log(usersThr);

//Class22:
// -- отфильтровать (оставить) тех у кого отрицательный статус

let usersFalse = usersWithAddress.filter(value => value.status === false)

console.log(usersFalse);

//Class23:
// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
//
let usersFalseThr = usersWithAddress.filter(value => value.status === false && value.age < 30)

console.log(usersFalseThr);

//Class24:
// -- отфильтровать (оставить) тех у кого номер дома четный

let usersWithHouse = usersWithAddress.filter(value => !(value.address.number % 2))

console.log(usersWithHouse);

