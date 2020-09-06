// #task
// Клас людина:
//     поля:
//         вага,зріст
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Human = /** @class */ (function () {
    function Human(weight, height) {
        this.height = height;
        this.weight = weight;
    }
    return Human;
}());
// Клас депутат(наслідується від людини):
// поля:
//     прізвище,ім'я,вік,хабарник?,розмі хабаря
// методи:
//     дати хабаря(зробити відповідні перевірки...
// якщо депутат не хабарник то щоб він відмовився,
//     або ж якщо сума хабаря надто велика то щоб він вагався
// чи брати чи ні)
var Deputat = /** @class */ (function (_super) {
    __extends(Deputat, _super);
    function Deputat(weight, height, lastName, firstName, age, rozmirHabarya, habarnyk) {
        var _this = _super.call(this, weight, height) || this;
        _this.weight = weight;
        _this.height = height;
        _this.lastName = lastName;
        _this.firstName = firstName;
        _this.age = age;
        _this.habarnyk = habarnyk;
        _this.rozmirHabarya = rozmirHabarya;
        return _this;
    }
    Deputat.prototype.datyHabar = function (suma) {
        if (this.habarnyk === true) {
            this.rozmirHabarya += suma;
            return console.log('Всьо організуємо!');
        }
        else {
            if (suma < 500000) {
                return console.log('Ти що собі дозволяєш!');
            }
            else {
                return console.log('Я подумаю...');
            }
        }
    };
    return Deputat;
}(Human));
var morozMaxym = new Deputat(78, 178, 'Moroz', 'Maxym', 33, 0, false);
console.log(morozMaxym.rozmirHabarya);
morozMaxym.datyHabar(20000000);
console.log(morozMaxym.rozmirHabarya);
// Клас фракція
// поля:
//     список депутатів
// методи:
//     додати депутата (вводимо з клави)
// видалити депутата(теж з клави)
// видалити всіх негідників які брали хабаря
// вивести найбільшого хабарника
// вивести всіх депутатів
// видалити всіх депутатів
// вивести загальну суму хабарів для фракції
// клас Верховна рада
// поля:
//     мапа фракцій
// методи:
//     додати\видалити фракцію
// вивести всі фракції
// вивести конкретну фракцію
// додати\видалити депутата з фракції
// вивести всіх хабарників фракції
// вивести найбільшого хабарника у фрації
// вивести найбільшого хабарника верховної ради
// вивести фсіх депутатів фракції
// вивести найбільшого хабарника фракції
//
// в майні зробити через switch меню
//     1 - Верховна рада
//         2 - Фракція
//         3 - Депутат
//         відповідно при вводі з клави певної цифри ми попадаєио в інше меню
//         якщо ми нажали 1 то нам промалюється в консолі таке меню
//         1-додати фракцію
//         2-вивести всі фракції
//         3-вивести найбільшого хабарника
//         меню робимо на свій смак
