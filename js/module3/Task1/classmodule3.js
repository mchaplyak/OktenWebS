// =================
// =====class=======
// =================
// Взяти файл template_2.html та працювати в ньому

//ClassTask1
// - Напишіть код, який :
// -- змінює колір тексту елемнту з ід main_header на будь-який інший
let mainHeaderId = document.getElementById('main_header');
mainHeaderId.style.color = ('green');

//ClassTask2
// -- робить шириниу елементу ul 400 пікселів
let ulElements = document.getElementsByTagName('ul')

for (let i = 0; i < ulElements.length; i++) {
    ulElements[i].style.width = ('400px');
}

// -- робить шириниу всіх елементів з класом linkList шириною 50%
let linkListEl = document.getElementsByClassName('linkList');
console.log(linkListEl);



// -- отримує текст який зберігається в елементі з класом listElement2

let listTwoEl = document.getElementsByClassName('listElement2')

for (let i = 0; i < listTwoEl.length; i++) {
    console.log(listTwoEl[i]);
}

// -- отримує всі елементи li та змінює ім колір фону на сірий
let liEl = document.getElementsByTagName('li');

for (let fieldLi of liEl) {
   fieldLi.style.backgroundColor = ('silver');
}


// -- отримує всі елементи 'a' та додає їм клас anchor

let aEl = document.getElementsByTagName('a');
for (fieldA of aEl) {
 fieldA.classList.add('anchor');
}

// -- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

for (fieldAb of aEl) {
    if (fieldAb.innerText === 'link3') fieldA.style.fontSize = ('40px');
}

// -- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

for (fieldAc of aEl) {
    fieldAc.classList.add(`element_${fieldAc.innerText}`);
}

// -- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

// suHeadColor = prompt('Select Color');
// let subHeadEl = document.getElementsByClassName('sub-header');
//
// for (let fieldSuColor of subHeadEl) {
//     fieldSuColor.style.backgroundColor = (suHeadColor);
// }

// -- отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

// for (let fieldSubHead of subHeadEl) {
//     if (fieldSubHead.innerText === 'content 2 segment') fieldSubHead.style.color = (suHeadColor)
// }

// -- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()


// let contentText = prompt('Enter Text');
// let contentOneEl = document.getElementsByClassName('content_1');
//
// for (let fieldContOne of contentOneEl) {
//     fieldContOne.innerText = (contentText);
// }


// -- отримати елементи p та змінити їм paddin на довільне значення

let pEl = document.getElementsByTagName('p')

for (let fieldP of pEl) {
    fieldP.style.padding = ('50px');
}

// -- отримати елементи з класом text2 та змінити їм текст на довільне значення

let textTwoEl = document.getElementsByClassName('text2');
for (let fieldTextTwo of textTwoEl) {
    fieldTextTwo.innerText = ('Other text in TextTwo Elements')
}

//Done!!
