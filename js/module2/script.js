//Module2

//Task0
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i=0; i < 10; i++) {
    console.log(i);
    document.write(i);
}
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i=0; i<100; i++) {
    console.log(i);
    document.write (i);
}
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let i=0; i < 200, i+=2;) {
    console.log(i);
    document.write(i);
}
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let i=0; i < 200; i+=2) {
    console.log(i);
    document.write(i);
}
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let i=1; i < 200; i+=2) {
    console.log(i);
    document.write(i);
}



//Task1: створити масив та вивести його в консоль:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу

let arrOne = [5, 20, 8, 42, 99];
let arrTwo = ['one', 'two', 'three', 'four', 'five'];
let arrThree = ['string', 4, true, 15, 'stringTwo'];
console.log(arrOne, arrTwo, arrThree);

// Task2: Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

console.log(arrOne, arrTwo, arrThree);
let arrFour = [];
arrFour.splice(2, 0, 'IndexThree')
arrFour.splice(0, 0, 'IndexOne')
arrFour.splice(1, 0, 'IndexTwo')
console.log(arrFour);

//Task3: За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

for (let i=0; i <= 10; i++ ) {
    document.write('<div>Довільний текст всередині діву</div>')
}

//Task4: - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

i = 1;

for (let i=0; i <= 10; i++ ) {
    document.write(`Довільний текст і цифра ${i}`)
    document.write('</br>')
}

//Task5: - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let i =0;
while (i < 20) {
    document.write(`<h1>Довільний текст</h1>`)
    i++
//Task6: - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let i =0;
while (i < 20) {
    document.write(`<h1>Довільний текст ${i}</h1>`)
    i++
}
//Task7: - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let arrOne = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

for (i=0; i < arrOne.length; i++) {
    console.log(arrOne[i]);
}

//Task8: - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let arrOne = ['stringOne', 'stringTwo', 'stringThree', 'stringFour', 'stringFive', 'stringSix', 'stringSeven',
    'stringEight', 'stringNine', 'stringTen'];


for (let strings of arrOne) {
    console.log(strings);
}

//Task9: - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let arrOne = ['One', 1, false, 'true', 'string', 2, 6, true, 25, 'false'];

for (let arrData of arrOne) {
    document.write(arrData);
    document.write('</br>');
}

//Task10: - - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let arrOne = ['One', 1, false, 'true', 'string', 2, 6, true, 25, 'false'];

for (i = 0; i < arrOne.length; i++) {
    if (typeof arrOne[i] === 'boolean') {
        document.write(arrOne[i])
        document.write('</br>')
    } else {
        i++
    }
}

//Task11: Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

let arrOne = ['One', 1, false, 'true', 'string', 2, 6, true, 25, 'false'];

for (i = 0; i < arrOne.length; i++) {
    if (typeof arrOne[i] === 'number') {
        document.write(arrOne[i])
        document.write('</br>')
    } else {
        i++
    }
}
//Task12: - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

let arrOne = ['One', 1, false, 'true', 'string', 2, 6, true, 25, 'false'];

for (i = 0; i < arrOne.length; i++) {
    if (typeof arrOne[i] === 'string') {
        document.write(arrOne[i])
        document.write('</br>')
    } else {
        i++
    }
}

//Task13: - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)

let hr=0;

for (let min = 0; min<=2; min++) {
    for (let sec = 0; sec < 60; sec++){
        console.log(`${hr}:${min}:${sec}`)
        if (min === 2 && sec === 0) {
            break
        }
    }
}


//Task14: - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)


for (let hr = 0; hr < 3; hr++) {
    for (let min = 0; min < 60; min++) {
        for (let sec = 0; sec < 60; sec++) {
            document.write(`${hr}:${min}:${sec}`);
            document.write(`</br>`)
            if (hr===2 && min===20 && sec === 0) {
                break;
            }
        }

        if (hr===2 && min===20) {
            break;
        }
    }
}

//Task15: - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.

let arrOne = ['a', 'b', 'c'];

for (let i=1; i < 4; i++) {
    arrOne.push(i);
}
console.log(arrOne);

//Task16: - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].

let arrOne = ['1', '2', '3'];

let arrTwo = [arrOne[2], arrOne[1], arrOne[0]];
console.log(arrOne);
console.log(arrTwo);

//Task17: - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.

let arrOne = [1, 2, 3];

for (let i=4; i < 7; i++) {
    arrOne.push(i);
}
console.log(arrOne);

//Task18: - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.

let arrOne = [1, 2, 3];

for (let i=6; i > 3; i--) {
    arrOne.unshift(i);
}
console.log(arrOne);

//Task19: - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
let arrOne = ['js','css','jq'];
let arrOneShifted = arrOne.shift();
console.log(arrOneShifted);

//Task20: - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()

let arrOne = ['js','css','jq'];
let arrOnePopped = arrOne.pop();
console.log(arrOnePopped);

//Task21: - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].
let arrOne = [1, 2, 3, 4, 5];
console.log(arrOne.slice(3))

//Task22: - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].
let arrOne = [1, 2, 3, 4, 5];
console.log(arrOne.slice(0, 2));

//Task23: - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].

//Task24: - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
let arrOne = [1, 2, 3, 4, 5];
arrOne.splice(3,0, 'a','b','c');
console.log(arrOne);

//Task25: - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
let arrOne = [1, 2, 3, 4, 5];
arrOne.splice(2,0, 'a','b');
arrOne.splice(5,0, 'c');
arrOne.splice(8,0, 'e');
console.log(arrOne);



//Task26: - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

let arrOne = [2, 10, 7, 3, 5, 8, 6, 22, 96, 99];
for (let i=0; i< arrOne.length; i++) {
    if (!(arrOne[i] % 2)) {
        console.log(arrOne[i]);
    }
}

// Task27: - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
let arrOne = [2, 10, 7, 3, 5, 8, 6, 22, 96, 98];
let arrTwo = [];

for(let i=0; i < arrOne.length; i++) {
    arrTwo.push(arrOne[i])
}

console.log(arrOne);
console.log(arrTwo);

// Task28:- Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.


    let arrOne = [2, 10, 7, 3, 5, 8, 6, 22, 96, 97];
    let arrTwo = [];

    for(let i=0; i < arrOne.length; i++) {

        arrTwo.push(arrOne[i]);

    }
    console.log(arrTwo);


//Task29: зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:

let arrOne = [2,17,13,6,22,31,45,66,100,-18];

//Task29.1. перебрати його циклом while
let i=0;
while (i < arrOne.length) {
    console.log(arrOne[i]);
    i++
}
// 29.2. перебрати його циклом for
for (let i=0; i <arrOne.length; i++){
    console.log(arrOne[i]);
}
// 29.3. перебрати циклом while та вивести  числа тільки з непарним індексом
let i = 1
while (i < arrOne.length) {
    console.log(arrOne[i]);
    i+= 2
}

// 29.4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let i=1; i <arrOne.length; i+=2) {
    console.log(arrOne[i]);
}

// 29.5. перебрати циклом while та вивести  числа тільки парні  значення
let i = 0
while (i < arrOne.length) {
    console.log(arrOne[i]);
    i+= 2
}
// 29.6. перебрати циклом for та вивести  числа тільки парні  значення
for (let i=0; i <arrOne.length; i+=2) {
    console.log(arrOne[i]);
}
// 29.7. замінити кожне число кратне 3 на слово "okten"
for (let i=3; i <arrOne.length; i+=3) {
    arrOne[i] = 'okten';
}

// 29.8. вивести масив в зворотньому порядку.
console.log(arrOne);
for (let i=arrOne.length; i >= 0; i--) {
    console.log(arrOne[i]);
}
// 29.9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

    //1
let i=arrOne.length;
while (i >= 0) {
    console.log(arrOne[i]);
    i--
}
    //2
for (let i=arrOne.length; i >=0; i--) {
    console.log(arrOne[i]);
}
    //3
let i = 9;
while (i >= 0) {
    console.log(arrOne[i]);
    i-=2;
}
    //4
for (let i=9; i >=0; i-=2) {
    console.log(arrOne[i]);
}
    //5
let i = 8;
while (i >= 0) {
    console.log(arrOne[i]);
    i-=2;
}
    //6
for (let i=8; i >=0; i-=2) {
    console.log(arrOne[i]);
}
    //7

for (let i=9; i >= 0; i-=3) {
    arrOne[i] = 'okten';
}
console.log(arrOne);



// 29.10
//  створити пустий масив та :
// - заповнити його 50 парними числами за допомоги циклу.
let arrOne = [];
for (let i=2; i<=100; i+=2) {
    arrOne.push(i);
}

console.log(arrOne);

// - заповнити його 50 непарними числами за допомоги циклу.
let arrOne = [];
for (let i=1; i<=100; i+=2) {
    arrOne.push(i);
}

console.log(arrOne);


//Task30: створити пустий масив та:

    let arrOne = [];
// 30.1. заповнити його 50 парними числами за допомоги циклу.
    for (let i=1; i<=50; i++) {
        arrOne.push(i*2);
    }

    console.log(arrOne);


// 30.2. заповнити його 50 непарними числами за допомоги циклу.
let arrOne = [];
for (let i=1; i<=100; i+=2) {
    arrOne.push(i);
}

console.log(arrOne);

// 30.3.1 используя Math.random заполнить массив из ???(сколько хотите) элементов.

// for (let i=0; i<50; i++) {
//     arrOne.push(Math.random())
// }
// console.log(arrOne);

//     диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)
for (let i=0; i<50; i++) {
    arrOne.push(
        Math.floor(Math.random()*732) + 8
    )
}
console.log(arrOne);

// 30.3.2 вывести на консоль  каждый третий елемент

for (let i=2; i <arrOne.length; i+=3) {
    console.log(arrOne[i]);
}

// 3. вывести на консоль  каждый третий елемент
// но при условии что его значение является парным.
for (let i=2; i <arrOne.length; i+=3) {
    if (!(arrOne[i] % 2)) {
        console.log(arrOne[i]);
    }
}
// 4. вывести на консоль  каждый третий елемент
// но при условии что он имеет парное значение и
// записать их в другой массив.

let arrTwo = [];
for (let i=2; i <arrOne.length; i+=3) {
    if (!(arrOne[i] % 2)) {
        console.log(arrOne[i]);
        arrTwo.push(arrOne[i])
    }
}
console.log(arrTwo);
// 5. Вывести каждый елемент массива у которого соседний с права элемент - парный
for (let i=2; i <arrOne.length; i+=3) {
    if (!(arrOne[i] % 2)) console.log(arrOne[i-1]);

}
// 5 масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. обрахувати середній чек.


    let arrOne = [100,250,50,168,120,345,188];
    let summ = 0;

    for (let i = 0; i < arrOne.length; i++) {
        summ += (arrOne[i]);
    }
    summ /= arrOne.length
    console.log(summ);


// 3 створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

    let arrOne = [];
    let arrTwo = [];
    for (let i=0; i<10; i++) {
        arrOne.push(
            Math.floor(Math.random()*200) + 1
        )
        arrTwo.push(arrOne[i]*5);
    }
    console.log(arrOne);
    console.log(arrTwo);

// 4 створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо об'єкт є числом,
// додати його в інший масив.
let arrOne = [4, 'Text', 8, false, 25, 'string', 64];
let arrTwo = [];

for (let i=0; i <arrOne.length; i++) {
    if (typeof arrOne[i] ==='number') {
        arrTwo.push(arrOne[i]);
    }
}
console.log(arrOne);
console.log(arrTwo);