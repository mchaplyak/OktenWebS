// Task1: присвоить каждому из следующих значений свою переменную: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false Вывести каждую при помощи console.log , alert, document.write
let sOne = 'hello';
let sTwo = 'owu';
let sThree = 'com';
let sFour = 'ua';
let nOne = 1;
let nTwo = 10;
let nThree = -999;
let nFour = 123;
let nFive = 3.14;
let nSix = 2.7;
let nSeven = 16;
let bOne = true;
let bTwo = false;

//console
console.log(sOne);
console.log(sTwo);
console.log(sThree);
console.log(sFour);
console.log(nOne);
console.log(nTwo);
console.log(nThree);
console.log(nFour);
console.log(nFive);
console.log(nSix);
console.log(nSeven);
console.log(bOne);
console.log(bTwo);

//alert
alert(sOne);
alert(sTwo);
alert(sThree);
alert(sFour);
alert(nOne);
alert(nTwo);
alert(nThree);
alert(nFour);
alert(nFive);
alert(nSix);
alert(nSeven);
alert(bOne);
alert(bTwo);

//document.write
document.write(sOne+'</br>');
document.write(sTwo+'</br>');
document.write(sThree+'</br>');
document.write(sFour+'</br>');
document.write(nOne+'</br>');
document.write(nTwo+'</br>');
document.write(nThree+'</br>');
document.write(nFour+'</br>');
document.write(nFive+'</br>');
document.write(nSix+'</br>');
document.write(nSeven+'</br>');
document.write(bOne+'</br>');
document.write(bTwo+'</br>');

document.write('</br>');

// Task2: переопределить каждую переменную из задания 1 дав им произвольные значения Вывести каждую при помощи console.log , alert, document.write

sOne = 'my';
sTwo = 'name';
sThree = 'is';
sFour = 'max';
nOne = 2;
nTwo = 20;
nThree = -888;
nFour = 321;
nFive = 3.1;
nSix = 'five point five';
nSeven = 89;
bOne = false;
bTwo = true;

//console
console.log(sOne);
console.log(sTwo);
console.log(sThree);
console.log(sFour);
console.log(nOne);
console.log(nTwo);
console.log(nThree);
console.log(nFour);
console.log(nFive);
console.log(nSix);
console.log(nSeven);
console.log(bOne);
console.log(bTwo);

// alert
alert(sOne);
alert(sTwo);
alert(sThree);
alert(sFour);
alert(nOne);
alert(nTwo);
alert(nThree);
alert(nFour);
alert(nFive);
alert(nSix);
alert(nSeven);
alert(bOne);
alert(bTwo);

//document.write
document.write(sOne+'</br>');
document.write(sTwo+'</br>');
document.write(sThree+'</br>');
document.write(sFour+'</br>');
document.write(nOne+'</br>');
document.write(nTwo+'</br>');
document.write(nThree+'</br>');
document.write(nFour+'</br>');
document.write(nFive+'</br>');
document.write(nSix+'</br>');
document.write(nSeven+'</br>');
document.write(bOne+'</br>');
document.write(bTwo+'</br>');

document.write('</br>');

// Task3: Создать 3 числовых и 3 стринговых константы. Вывести каждую при помощи console.log , alert, document.write
const by = 1997;
const bm = 3;
const bd = 10;
const bc = 'N.Rozdil';
const br = 'Lviv';
const bcn = 'Ukraine';

//console
console.log(by);
console.log(bm);
console.log(bd);
console.log(bc);
console.log(br);
console.log(bcn);

//alert
alert(by);
alert(bm);
alert(bd);
alert(bc);
alert(br);
alert(bcn);

//document.write
document.write(by+'</br>');
document.write(bm+'</br>');
document.write(bd+'</br>');
document.write(bc+'</br>');
document.write(br+'</br>');
document.write(bcn+'</br>');

document.write('</br>');

// Task4: при помощи 3х разных prompt() получить 3 слова которые являются вашими ФИО. Для фамилии имени и отчества создать разные переменные. Вывести каждую при помощи console.log , alert, document.write

const lastName = prompt ('Enter your last name');
const name = prompt ('Enter your name');
const patronymic = prompt ('Enter your patronymic');

//console
console.log(lastName);
console.log(name);
console.log(patronymic);

//alert
alert(lastName);
alert(name);
alert(patronymic);

//document.write
document.write(lastName+'</br>');
document.write(name+'</br>');
document.write(patronymic+'</br>');

// Task5: Взять переменные из задания 4 и сконкатенировать их в одной переменной person.

const person = lastName + name + patronymic;
console.log(person);

// Task6: Взять задние 4 и 5 и применить его к ФИО всех членов своей семьи.


//mother

const motherLastName = prompt ('Enter your mothers last name');
const motherName = prompt ('Enter your mothers name');
const motherPat = prompt ('Enter your mothers patronymic');

//console
console.log(motherLastName);
console.log(motherName);
console.log(motherPat);

//alert
alert(motherLastName);
alert(motherName);
alert(motherPat);

//document.write
document.write(motherLastName+'</br>');
document.write(motherName+'</br>');
document.write(motherPat+'</br>');

const personTwo = motherLastName + motherName + motherPat;
console.log(personTwo);

//brother

const brotherLastName = prompt ('Enter your brothers last name');
const brotherName = prompt ('Enter your brothers name');
const brotherPat = prompt ('Enter your brothers patronymic');

//console
console.log(brotherLastName);
console.log(brotherName);
console.log(brotherPat);

//alert
alert(brotherLastName);
alert(brotherName);
alert(brotherPat);

//document.write
document.write(brotherLastName+'</br>');
document.write(brotherName+'</br>');
document.write(brotherPat+'</br>');

const personThree = brotherLastName + brotherName + brotherPat;
console.log(personThree);

// Task7: при помощи prompt() получить 3 числа. Привести их к числовому типу при помощи +. вывести их в консоль.

const numberOne = +prompt('Enter number 1');
const numberTwo = +prompt('Enter number 2');

console.log(numberOne+numberTwo)

// Task8: при помощи prompt() получить 4 числа. Привести их к числовому типу при помощи parseInt. Сложить их между собой записав результат в переменную result и вывести в консоль браузера

const numberOne = parseInt (prompt('Enter number 1'));
const numberTwo = parseInt (prompt('Enter number 2'));

let resultEight = numberOne+numberTwo;

console.log(resultEight);

// Task9: при помощи prompt()  получить 3 числа с плавающей точекой. при помощи parseFloat привести их к соответсвующему типу. Сложить их между собой записав результат в переменную result и вывести в консоль браузера
const numberOne = parseFloat (prompt('Enter number 1'));
const numberTwo = parseFloat (prompt('Enter number 2'));

let resultNine = numberOne+numberTwo;

console.log(resultNine);

// Task10: при помощи prompt()  получить 3 числа с плавающей точекой. Округлить их при помощи Math.round Сложить их между собой записав результат в переменную  и вывести в консоль браузера
let numberOne = Math.round (+prompt('Enter number 1'));
let numberTwo = Math.round (+prompt('Enter number 2'));

let resultTen =  numberOne+numberTwo;

console.log(resultTen);

// Task11: при помощи prompt()  получить 2 целых числа. Привести их к целочисленному типу. Первое число - это число которое будут возводить в степень. Второе число - это число которое является степенью. При помощи Math.pow возвести первое число в степень второго числа.
let numberOne = Math.round (+prompt('Enter number 1'));
let numberTwo = Math.round (+prompt('Enter number 2'));

let resultEl =  Math.pow(numOne,numTwo);

console.log(resultEl);

// Task11: При помощи оператора опредеоения типа typeof определить типы следующих переменных и вывести их в консоль let a = 100; let b = '100'; let c = true; let d = undefined;

let a = 100;
let b = '100';
let c = true;
let d = undefined;

// Task12: При помощи оператора опредеоения типа typeof определить типы следующих переменных и вывести их в консоль let a = 100; let b = '100'; let c = true; let d = undefined;

let a = 100;
let b = '100';
let c = true;
let d = undefined;

console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));
console.log(typeof(d));

// Task11: Поставьте соответствующий оператор в выражениях что бы получился соответсвующий результат. В одинаковых выражениях в задании не использовать два одинаковых оператора.

let taksElOne = 5 < 6;
let taksElOTwo = 5 > 6;
let taksElThree = 5 === 6;
let taksElFour = 5 >= 6;
let taksElFive = 10 === 10;
let taksElSix = 10 >= 10;
let taksElSev = 10 > 10;
let taksElEight = 10 < 10;
let taksElNine = 10 !== 10;
let taksElTen = 123 === '123';
let taksElEl = 123 !== '123';


// Task12: - Посмотрев на следюующие выражения, скажите, каков будет вывод в консоль
console.log(132 > 100 && 45 < 12 ); // false
console.log(34 > 33 && 23 < 90 ); // true
console.log(99 > 100 && 45 > 12 ); // false
console.log(132 > 100 || 45 < 12 ); // true
console.log(111 > 11 || 45 < 111 ); // true
console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) ); // true
console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) ); // true
console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) ); // false
console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 )); // true
console.log(!!'-1'); // true
console.log(!!-1); // true
console.log(!!'0'); // true
console.log(!!'null'); //true
console.log(!!'undefined'); //true
console.log(!!(3/'owu')); // NaN
console.log((111 > 11 || 45 < 111) ||  !!'0'); // true
console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 )); // false


//Додаткові. 1. Три різних числа вводяться через prompt().
// За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)

let numOne = prompt('Enter number 1');
let numTwo = prompt('Enter number 2');
let numThree = prompt('Enter number 3');

if (numOne < numTwo && numOne < numThree && numTwo < numThree) {
    console.log(numOne, numTwo, numThree);
} else if(numOne < numTwo && numOne < numThree && numTwo < numThree) {
    console.log(numOne, numThree, numTwo);
} else if(numOne < numTwo && numOne > numThree && numTwo < numThree) {
    console.log(numTwo, numThree, numOne);
} else if(numOne > numTwo && numOne < numThree && numTwo < numThree) {
    console.log(numTwo, numOne, numThree);
} else if(numOne < numTwo && numOne > numThree && numTwo > numThree) {
    console.log(numThree, numOne, numTwo);
} else if(numOne > numTwo && numOne > numThree && numTwo > numThree) {
    console.log(numThree, numTwo, numOne);
}

// 2.
// Все параматры получаем с клавиатуры!!!!
//     Имитируем поведение пешехода на перекстке.
//     Если светофор зеленый - вывести "иди".
//     Если светофор желтый - вывести "подожди".
//     Если светофор красный - вывести "стой".
//     Если светофор в аварийном режиме вывести "делай что хочешь"!

let trafficLight = prompt('Який колір світлофора?');
let isRoadClea = false;
switch (trafficLight) {
    case 'зелений':
        document.write('<h1>Йди!</h1>');
        break;

    case 'жовтий':
        document.write('<h1>Зачекай...</h1>')
        break;

    case 'червоний':
        document.write('<h1>Стій!</h1>')
        break;

    default:
        document.write('<h1>Роби, що хочеш</h1>')
}

// 3. Все параметры получаем с клавиатуры!!!!(prompt , confirm)
// Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
//     Улучшаем предыдущее задание.
//     Если светофор зеленый и машин нет - вывести "иди".
//     Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
// Если светофор желтый и машины есть - вывести "жди".
//     Если светофор желтый и машин нет - вывести "все рано жди".
//     Если светофор красный и машин нет- вывести "стой все рано".
//     Если светофор красный - и машины есть вывести "стой и жди".
//     Если светофор в аварийном режиме вывести "делай что хочешь"!

let trafficLightTwo = prompt('Який колір світлофора?');
let isRoadClear = confirm('На дорозі є машини?');

if (trafficLightTwo === 'зелений' && !isRoadClear) {
    document.write('<h1>йди</h1>')
} else if (trafficLightTwo === 'зелений' && isRoadClear) {
    document.write ('<h1>Зачекай поки порушники проїдуть</h1>')
} else if (trafficLightTwo === 'жовтий' && !isRoadClear) {
    document.write ('<h1>Все одно чекай</h1>')
} else if (trafficLightTwo === 'жовтий' && isRoadClear) {
    document.write ('<h1>Чекай</h1>')
} else if (trafficLightTwo === 'червоний' && isRoadClear) {
    document.write ('<h1>Стій, ще рано</h1>')
} else if (trafficLightTwo === 'червоний' && !isRoadClear) {
    document.write('<h1>Стій і чекай</h1>')
} else { document.write('Роби, що заманеться')
}


//classwork

//TaskOne: Определите переменные str, num, flag и txt со значениями «Привет», 123, true, «true». При помощи оператора typeof убедитесь, что значения переменных принадлежат типам: string, number и  boolean.

let str = 'Привет';
let num = 123;
let flag = true;
let txt = 'true'

console.log(typeof str, typeof num, typeof flag, typeof txt);

//TaskTwo: Создайте переменные a1, a2, a3, a4, a5. При помощи математических операторов (сложение, вычитание и т.д.) найдите значения выражений:
// 5 + 3,
// 5 - 3,
// 5 * 3,
// 5 / 3,
// 5 % 3
// поместив результат каждого выражения в соответствующую переменную. Например, let a1 = 5 + 3.

let a1 = 5+3;
let a2 = 5-3;
let a3 = 5*3;
let a4 = 5/3;
let a5 = 5%3;

console.log (a1, a2, a3, a4, a5);

// TskThree: Создайте переменные a6, a7, a8, a9, a10. Поместите в них результат выражений:
//     5 % 3,
//     3 % 5,
//     5 + '3',
//     '5' - 3,
//     75 + 'кг'

let a6 = 5%3;
let a7 = 3%5;
let a8 = 5 + '3';
let a9 = '5' - 3;
let a10 = 75 + 'кг';

console.log (a6, a7, a8, a9, a10);

//TaskFour: Напишите код, который находит площадь прямоугольника высота 23см. ( переменная height),
//   шириной 10см (переменная width), значение площади должно хранится в числовой переменной s.

let height = 23;
let widght = 10;
let s = 23*10;
console.log(s + 'см.');

//TaskFive: Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
// результат поместите в переменную v.

let heightC = 10;
let dC = 4;
let v = 3.14 * (4**2) *heightC;
console.log(v);

//TaskSix: У  прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
//   Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).

let n = 3;
let m = 4;

let k = Math.sqrt((n**2 + m**2));
console.log(k);

//TaskSeven:  Напишите скрипт, который выводит "Hello world", создавши переменную str и выводить спомощью document.write, alert и console.log

let str = 'Hello World';
document.write(str);
alert(str);
console.log(str);

//TaskEight: 8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).

alert('Chaplyak Maxym Olegovych\n23\nmusic');

//TaskNine: Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//   Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//   Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//   Вывести в документ содержимое переменной concatenation спомощью document.write

// let str1 = 'Кто';
// let str2 = 'ты';
// let str3 = 'такой?';
// let concatenation = str1 + str2 + str3;
// document.write(concatenation)

//TaskTen: Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
// let str = "20";
// let a = 5;
// document.write(str + a + "<br/>");
// document.write(str - a + "<br/>");
// document.write(str * "2" + "<br/>");
// document.write(str / 2 + "<br/>");
// 205, 15, 40, 10 - Символ "+" спрацює в першому випадку як конкатинація, тому вийде 205, в інших випадках, JS
// перевірить  чи в символьній стрічці є число, і побачить, що воно там є, тому перетворить його в число і виконає
// математичну операцію

//TaskEleven: Какие значения выведет в окно консоли следующий фрагмент кода если его поместить в console.log?
    parseInt("3.14") // 3
    parseInt("-7.875") // -8
    parseInt("435") // 435
    parseInt("Вася") // NaN

//TaskTwelve: С помощью окна ввода, вызываемого методом prompt, пользователь может ввести данные, которые будут использоваться далее, повторите код ниже
let str = prompt("Enter something", "ho-ho")
console.log(str);

//TaskThr: 13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert

let numOne = +prompt('Enter Number One');
let numTwo = +prompt('Enter Number Two');
alert(numOne + numTwo);

//TaskFourteen: С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст, а вам не обходимо вывести строку такого вида
//       Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert

let name = prompt('Введіть ваше імя');
let lastName = prompt('Введіть ваше прізвище');
let age = prompt('Введіть ваш вік');

alert(`Доброго вечору ${name} ${lastName}, мої вітання, що вам ${age}`);





