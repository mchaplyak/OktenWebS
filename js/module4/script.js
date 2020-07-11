//Task1:
// - створити функцію яка виводить масив
let arrOne = ['test', 5, false, 'time']
let arrTwo = ['asdw', 10, true, 'seconds']

function arrayFun (arrayName) {
    console.log(arrayName);
}

arrayFun(arrOne);
arrayFun(arrTwo);

//Task2
// - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.
let arrThree = [];

function numArr() {
    for (let i = 0; i < 10; i++) {
       arrThree.push(Math.floor((Math.random() * 1000) + 1))
    }
    arrayFun(arrThree)
}

numArr()

//Task3:
// - створити функцію яка приймає три числа та повертає та виводить найменьше.


// Task4:
// - створити функцію яка приймає три числа та повертає та виводить  найбільше.

//Task5:
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше

//Task6
// - створити функцію яка виводить масив
let arrFour = [25, true, 'string', false]

arrayFun(arrFour)


// Task7:
// - створити функцію яка повертає найбільше число з масиву

function maxNum(arrName) {
    let max = 0;
    for (let i = 0; i < arrName.length; i++) {
        if (arrName[i] > max) max = arrName[i];
    }
    return max;
}

let maxResult = maxNum(arrThree);
console.log(maxResult);

//Task8:
// - створити функцію яка повертає найменьше число з масиву

function minNum(arrName) {
let min = arrName[0];
    for (let i = 0; i < arrName.length; i++) {
        if (arrName[i] < min) min = arrName[i];
    }
return min;
}

let minResult = minNum(arrThree);
console.log(minResult);

// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
let arrFive = [25, 13, 26, 43, 12];

function sumArr(arrName) {
    let sum = 0;

    for (let i = 0; i < arrName.length; i++) {
        sum += arrName[i]}
    return sum;
    }

let sumResult = sumArr(arrFive);
console.log(sumResult);

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

let arrSix = [25, 13, 25, 46 ];


function sumArrSer(arrName) {
    let sum = 0;

    for (let i = 0; i < arrName.length; i++) {
        sum += arrName[i]}

    return sum / arrName.length;
}

let arrSer = sumArrSer(arrSix);
console.log(arrSer);

// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
let arrSeven = [25, {object: 1}, 14, true, {name: 'max'}, {number: 12}, {test: 'testText'} ];

function arrLength(arrName) {
    let sumEl = 0;
    for (const arrNameElement of arrName) {
        if (typeof arrNameElement === 'object') sumEl++;
    }
    return sumEl;
}

let sumElRes = arrLength(arrSeven);
console.log(sumElRes);

// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них

let arrEight = [ {object: 1}, {name: 'max', age: 23}, {number: 12}, {test: 'testText', otherText: 'Other test text'} ];

function arrObjF(arrName) {
    let sumEl = 0;
    for (const arrNameElement of arrName) {
        if (typeof arrNameElement === 'object' ) {
            for (const arrNameElementTwo in arrNameElement) {
                sumEl++
            }
        }
    }
    return sumEl;
}

let arrObjFRes = arrObjF(arrEight);
console.log(arrObjFRes);

// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     Приклад
//     [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
//
// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"
// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок
//
// (на основі минулого ДЗ)
// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// Приклад масивів:
//             let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
//             let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// Частковий приклад реультату:
//
//
//
// ***- беремо завдання з правилами з укроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
//
// 			let rules = [
// 				{
// 					title: 'Первое правило Бойцовского клуба.',
// 					body: 'Никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Второе правило Бойцовского клуба.',
// 					body: 'Никогда никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Третье правило Бойцовского клуба.',
// 					body: 'В схватке участвуют только двое.'
// 				},
// 				{
// 					title: 'Четвертое правило Бойцовского клуба.',
// 					body: 'Не более одного поединка за один раз.'
// 				},
// 				{
// 					title: 'Пятое правило Бойцовского клуба.',
// 					body: 'Бойцы сражаются без обуви и голые по пояс.'
// 				},
// 				{
// 					title: 'Шестое правило Бойцовского клуба.',
// 					body: 'Поединок продолжается столько, сколько потребуется.'
// 				},
// 				{
// 					title: 'Седьмое правило Бойцовского клуба.',
// 					body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
// 				},
// 				{
// 					title: 'Восьмое и последнее правило Бойцовского клуба.',
// 					body: 'Новичок обязан принять бой.'
// 				},
//
// 			];
// "
//
// ===========додаткове від віктора========
// 1) Точная степень двойки.
// Дано натуральное число N.
// Выведите слово YES, если число N является точной степенью двойки,
// или слово NO в противном случае.
// Операцией возведения в степень пользоваться нельзя!
//
// 2) Deep Copy
// реалізувати глибоке копіювання обєкту за допомогою рекурсій
//
// 3) Flat
// Вирівняти багаторівневий масив в однорівневий
// [1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]
// ===========додаткове========
