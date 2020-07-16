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

function minNumbers(a,b,c) {
    let min = 0;
    if (a < b && a < c) min = a
    else if (b < a && b < c) min = b
    else if (c < a && c < b) min = c;
    console.log('minimum element: ' + min);
    return min;
}

let minNumOne = minNumbers(24, 0, 99);
console.log(minNumOne);

// Task4:
// - створити функцію яка приймає три числа та повертає та виводить  найбільше.

function maxNumbers(a,b,c) {
    let max = 0;
    if (a > b && a > c) max = a
    else if (b > a && b > c) max = b
    else if (c > a && c > b) max = c;
    console.log('maximum element: ' + max);
    return max;
}

let maxNumOne = maxNumbers(24, 0, 99);
console.log(maxNumOne);


//Task5:
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше

function minMaxNum() {
    let min = arguments[0];
    let max = arguments[0];

    for (const argument of arguments) {
        if (argument < min) min = argument;
        if (argument > max) max = argument;
    }
    console.log('maximum element: ' + max);
    return min;
}

let mMNum = minMaxNum(25, 44, 56, 78, 202, 100500, 1, 24, -56, 341)
console.log('minimum element: ' + mMNum);

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

//Task 9:
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

//Task10:
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

//Task11:
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

//Task12:
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

//Task13:
// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     Приклад
//     [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

let arrNine = [1,2,3,4];
let arrTen = [2,3,4,5];


function arrSumator(arrOne, arrTwo) {
    let arrSum = [];

    for (let i = 0; i < arrOne.length; i++) {
        if (arrOne.length === arrTwo.length) {
            arrSum.push(arrOne[i] + arrTwo[i])
        } else console.log('Sorry NaN field')
    }
    return arrSum;
}

console.log(arrSumator(arrNine, arrTen));


//Task14:
// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"

let arrEl = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

function arrSplit(arrOne, i) {
    let num = arrOne[i]
    arrOne[i] = arrOne[i+1]
    arrOne[i+1] = num;
    return arrOne;

}
console.log(arrSplit(arrEl, 5));

//Task15:
// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
//
let arrTwel = [12, 0, 23, 45, 0, 54, 0, 65];

function arZero(arrName) {
    let arr = [];
        for (let i = 0; i < arrName.length; i++) {
            if (arrName[i] === 0) {
                arr.push(arrName.splice(i,1))
            }
        }

         return arrName.concat(...arr) // ... - розгортає масив, щоб не було дужок (Саша)
}

console.log(arZero(arrTwel));

//Task16:
// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"
function helloOwu() {
let owu = document.createElement('h1');
owu.innerText = 'hello owu';
document.body.appendChild(owu)
}

helloOwu();

//Task17:
// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
function textEl(element, text) {
let el = document.createElement(element);
el.innerText = text;
document.body.appendChild(el)
}
textEl('h2', 'hello OktenWeb')
//------------------------
//------------------------
//------------------------
// (на основі минулого ДЗ)
// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// Приклад масивів:


let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false},];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'},];


function concatArr(arrNameOne, arrNameTwo) {
    let users = [];
    for (const user of arrNameOne) {
        for (const city of arrNameTwo) {
            if (user.id === city.user_id) {
                users.push({...user, ...city});
            }
        }
    }
    return users
}

console.log(concatArr(usersWithId, citiesWithId));