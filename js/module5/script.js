//
//Task1:
// ==============================================
//     -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//     action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//     ]
//
// }
// ==============================================

function Tag(titleOfTag, action, attrs) {

this.titleOfTag = titleOfTag;
this.action = action;
this.attrs = attrs;

}

function TagAttr(titleOfAttr, actionOfAttr) {
    this.titleOfAttr = titleOfAttr;
    this.actionOfAttr = actionOfAttr;
}

    //<a>
let accessKey = new TagAttr(
    'accesskey',
    'Активація посилання за доп. комбінації клавіш'
    );

let coords = new TagAttr(
    'coords',
    'Встановлює координати активної області'
    );

let a = new Tag(
    '<a>',
    'Тег створює посилання',
    [accessKey,coords]
    );

    //<div>

let align = new TagAttr(
    'align',
    'Задає вирівнювання тегу',
    );

let titleAtt = new TagAttr(
    'title',
    'Добавляє вилітаючу підказку'
    );

let div = new Tag(
    '<div>',
    'Блочний елемент який виділяє фрагмент з ціллю змінни наповнення',
    [align, titleAtt]
    );

// h1

let alignH1 = new TagAttr(
    'align',
    'Вирівнює заголовок'
    );

let h1Tag = new Tag(
    '<h1>',
    'Заголовок першого рівня',
    [align, 'Також доступні універсальні атрибути']
);

// span

let span = new Tag(
    '<span>',
    'Тег створений для визначення рядкових елементів документу',
    ['Для цього тегу доступні універсальні атрибути']
);

// input
let accept = new  TagAttr(
    'accept',
    'Встановлює фільтр для типів файлів, котрі можна відправити через поле завантаження'
)

let alt = new TagAttr(
    'alt',
    'Альтернативний текст доя кнопки з зображенням'
);

let input = new Tag(
    '<input>',
    'Один щ елементів форми, котрий дозволяє створювати різні елементи інтерфейсу',
    [accept, alt]
);

// form

let action = new TagAttr(
    'action',
    'Адреса документа, чи програми, котрий обробляє данні форми',
);

let nameAttr = new TagAttr(
    'name',
    'Імя форми',
);

let formATag = new Tag(
    '<form>',
    'Встановлює форму на веб сторінці',
    [action, nameAttr]
);


// option

let disabled = new TagAttr(
    'disabled',
    'Заблокувати для доступу елемент списку',
);

let label = new TagAttr(
    'label',
    'Вказівник мітки пункту списку'
);

let option = new Tag(
    '<option>',
    'Визначає окремі пункти списку, котри ствоює тег select',
    [disabled, label]
);

// select

let formAttr = new TagAttr(
    'form',
    'Звязує список з формою'
);

let sizeAttr = new TagAttr(
    'size',
    'Кількість рядків списку, зо відображаються'
);

let selectTag = new Tag(
    '<select>',
    'Тег дозволяє створювати елемент випадаючого списку',
    [formAttr, sizeAttr]
);


//Task2:
// ==============================================
//     -  Створити класс  для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//     action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//     ]
//
// }
// ==============================================

class TagClass {
    constructor(titleOfTag, action, attrs) {
        this.titleOfTag = titleOfTag;
        this.action = action;
        this.attrs = attrs;
    }
}

class TagAttrClass {
    constructor(titleOfAttr, actionOfAttr) {
        this.titleOfAttr = titleOfAttr;
        this.actionOfAttr = actionOfAttr;
    }
}


let accessKeyAttr = new TagAttrClass(
    'accesskey',
    'Активація посилання за доп. комбінації клавіш'
)

let titleAttr = new TagAttr(
    'title',
    'Добавляє вилітаючу підказку'
)

let aClass = new TagClass(
    '<a>',
    'Стоврює посилання',
    [accessKeyAttr, titleAttr]
)

// h1

let alignH1Class = new TagAttr(
    'align',
    'Вирівнює заголовок'
);

let h1TagClass = new Tag(
    '<h1>',
    'Заголовок першого рівня',
    [alignH1Class, 'Також доступні універсальні атрибути']
);

// span

let spanClass = new Tag(
    '<span>',
    'Тег створений для визначення рядкових елементів документу',
    ['Для цього тегу доступні універсальні атрибути']
);

// input
let acceptClass = new  TagAttr(
    'accept',
    'Встановлює фільтр для типів файлів, котрі можна відправити через поле завантаження'
)

let altClass = new TagAttr(
    'alt',
    'Альтернативний текст доя кнопки з зображенням'
);

let inputClass = new Tag(
    '<input>',
    'Один щ елементів форми, котрий дозволяє створювати різні елементи інтерфейсу',
    [acceptClass, altClass]
);

// form

let actionClass = new TagAttr(
    'action',
    'Адреса документа, чи програми, котрий обробляє данні форми',
);

let nameAttrClass = new TagAttr(
    'name',
    'Імя форми',
);

let formATagClass = new Tag(
    '<form>',
    'Встановлює форму на веб сторінці',
    [actionClass, nameAttrClass]
);


// option

let disabledClass = new TagAttr(
    'disabled',
    'Заблокувати для доступу елемент списку',
);

let labelClass = new TagAttr(
    'label',
    'Вказівник мітки пункту списку'
);

let optionClass = new Tag(
    '<option>',
    'Визначає окремі пункти списку, котри ствоює тег select',
    [disabledClass, labelClass]
);

// select

let formAttrClass = new TagAttr(
    'form',
    'Звязує список з формою'
);

let sizeAttrClass = new TagAttr(
    'size',
    'Кількість рядків списку, зо відображаються'
);

let selectTagClass = new Tag(
    '<select>',
    'Тег дозволяє створювати елемент випадаючого списку',
    [formAttrClass, sizeAttrClass]
);



//Task3:
// ==============================================
//     - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
let vaz = {
    model: 2109,
    manuf: 'Russia',
    year: 1990,
    maxSpeed: 100,
    engine: 1.2,
    drive: function () {
        document.write(`Їдемо зі швидкістю ${this.maxSpeed} на годину`)
    },
    info: function () {
        console.log(this)
    },
    increaseMaxSpeed: function (newSpeed) {
        this.maxSpeed = newSpeed;
    },
    changeYear: function (newValue) {
        this.year = newValue
    },
    addDriver: function (driver) {
        this.driver = driver
    }
}

vaz.drive();
vaz.addDriver({name: 'Vsya', age: 21})
vaz.info()
console.log(vaz);

// ==============================================
//     - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================




function CarF(model, manuf, year, maxSpeed, engine) {
        this.model = model;
        this.manuf = manuf;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engine = engine;

    this.drive =  function () {
        document.write(`Їдемо зі швидкістю ${this.maxSpeed} на годину`)
    };

    this.info = function () {

    }; //????

    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = newSpeed;
    };

    this.changeYear = function (newValue) {
        this.year = newValue
    };

    this.addDriver = function (driver) {
        this.driver = driver
    }



}




// ==============================================
//     - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================


class Car {
    constructor(model, manuf, year, maxSpeed, engine) {
        this.model = model;
        this.manuf = manuf;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engine = engine;
        }
    drive() {
        document.write(`Їдемо зі швидкістю ${maxSpeed} на годину`)
    };

    info() {
        console.log(this)
    };

    increaseMaxSpeed (newSpeed) {
        this.maxSpeed = newSpeed;
    };

    changeYear (newValue) {
        this.year = newValue
    };

    addDriver (driver) {
        this.driver = driver
    }

}

// ==============================================
//     -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================

class Cinderella {
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }
}

let cinderellas = [
    lyuda = new Cinderella('Lyuda', 28, 35),
    olena = new Cinderella('Olena', 24, 36),
    vasylyna = new Cinderella('Vasylyna', 20, 37),
    viktoria = new Cinderella('Viktoria', 25, 38),
    roksa = new Cinderella('Roksa', 18, 39),
    maria = new Cinderella('Maria', 28, 40),
    adriana = new Cinderella('Adriana', 29, 37),
    dasha = new Cinderella('Dasha', 19, 35),
    marta = new Cinderella('Marta', 24, 40),
    lilia = new Cinderella('Lilia', 30, 38),
    ]

console.log(cinderellas);

class Prince {
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}

let petro = new Prince('Petro', 29, 37);

for (const cinderella of cinderellas) {
    if (cinderella.age === petro.age && cinderella.size === petro.shoe) {
        document.write(`Принц ${petro.name} знайшов свою попелюшку - ${cinderella.name}`)
    }
}



// ==============================================
//     -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================


function CinderellaS(nameS, ageS, sizeS) {
    this.nameS = nameS;
    this.ageS = ageS;
    this.sizeS = sizeS;
}

let cinderellasS = [
    lyuda = new CinderellaS('Lyuda', 28, 34),
    olena = new CinderellaS('Olena', 24, 36),
    vasylyna = new CinderellaS('Vasylyna', 20, 37),
    viktoria = new CinderellaS('Viktoria', 25, 38),
    roksa = new CinderellaS('Roksa', 18, 39),
    maria = new CinderellaS('Maria', 28, 40),
    adriana = new CinderellaS('Adriana', 29, 37),
    dasha = new CinderellaS('Dasha', 19, 35),
    marta = new CinderellaS('Marta', 24, 40),
    lilia = new CinderellaS('Lilia', 30, 38),
]

let bohdan = {
    name: 'Bohdan',
    age: 19,
    shoe: 35,
    searchCinderella: function () {
        for (const cinderella of cinderellasS) {
            if (cinderella.ageS === bohdan.age && cinderella.sizeS === bohdan.shoe) {
                document.write(`Принц ${bohdan.name} знайшов свою попелюшку - ${cinderella.nameS}`)
            }
        }

    }
}

bohdan.searchCinderella()