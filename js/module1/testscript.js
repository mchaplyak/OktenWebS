//classwork

//TaskOne: Определите переменные str, num, flag и txt со значениями «Привет», 123, true, «true». При помощи оператора typeof убедитесь, что значения переменных принадлежат типам: string, number и  boolean.

// let str = 'Привет';
// let num = 123;
// let flag = true;
// let txt = 'true'
//
// console.log(typeof str, typeof num, typeof flag, typeof txt);

//TaskTwo: Создайте переменные a1, a2, a3, a4, a5. При помощи математических операторов (сложение, вычитание и т.д.) найдите значения выражений:
// 5 + 3,
// 5 - 3,
// 5 * 3,
// 5 / 3,
// 5 % 3
// поместив результат каждого выражения в соответствующую переменную. Например, let a1 = 5 + 3.

// let a1 = 5+3;
// let a2 = 5-3;
// let a3 = 5*3;
// let a4 = 5/3;
// let a5 = 5%3;
//
// console.log (a1, a2, a3, a4, a5);

// TskThree: Создайте переменные a6, a7, a8, a9, a10. Поместите в них результат выражений:
//     5 % 3,
//     3 % 5,
//     5 + '3',
//     '5' - 3,
//     75 + 'кг'

// let a6 = 5%3;
// let a7 = 3%5;
// let a8 = 5 + '3';
// let a9 = '5' - 3;
// let a10 = 75 + 'кг';
//
// console.log (a6, a7, a8, a9, a10);

//TaskFour: Напишите код, который находит площадь прямоугольника высота 23см. ( переменная height),
//   шириной 10см (переменная width), значение площади должно хранится в числовой переменной s.

// let height = 23;
// let widght = 10;
// let s = 23*10;
// console.log(s + 'см.');

//TaskFive: Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
// результат поместите в переменную v.

// let heightC = 10;
// let dC = 4;
// let v = 3.14 * (4**2) *heightC;
// console.log(v);

//TaskSix: У  прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
//   Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).

// let n = 3;
// let m = 4;
//
// let k = Math.sqrt((n**2 + m**2));
// console.log(k);

//TaskSeven:  Напишите скрипт, который выводит "Hello world", создавши переменную str и выводить спомощью document.write, alert и console.log

// let str = 'Hello World';
// document.write(str);
// alert(str);
// console.log(str);

//TaskEight: 8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).

// alert('Chaplyak Maxym Olegovych\n23\nmusic');

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
//     parseInt("3.14") // 3
//     parseInt("-7.875") // -8
//     parseInt("435") // 435
//     parseInt("Вася") // NaN

//TaskTwelve: С помощью окна ввода, вызываемого методом prompt, пользователь может ввести данные, которые будут использоваться далее, повторите код ниже
// let str = prompt("Enter something", "ho-ho")
// console.log(str);

//TaskThr: 13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert

// let numOne = +prompt('Enter Number One');
// let numTwo = +prompt('Enter Number Two');
// alert(numOne + numTwo);

//TaskFourteen: С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст, а вам не обходимо вывести строку такого вида
//       Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert

// let name = prompt('Введіть ваше імя');
// let lastName = prompt('Введіть ваше прізвище');
// let age = prompt('Введіть ваш вік');
//
// alert(`Доброго вечору ${name} ${lastName}, мої вітання, що вам ${age}`);

