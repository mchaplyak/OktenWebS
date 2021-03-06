// #task
// Клас людина:
//     поля:
//         вага,зріст

class Human {
    weight: number;
    height: number;

    constructor(weight: number, height: number) {
        this.height = height;
        this.weight = weight;
    }
}

// Клас депутат(наслідується від людини):
// поля:
//     прізвище,ім'я,вік,хабарник?,розмі хабаря
// методи:
//     дати хабаря(зробити відповідні перевірки...
// якщо депутат не хабарник то щоб він відмовився,
//     або ж якщо сума хабаря надто велика то щоб він вагався
// чи брати чи ні)

class Deputat extends Human {
    lastName: string;
    firstName: string;
    age: number;
    habarnyk?: boolean;
    rozmirHabarya: number;

    constructor(weight: number, height: number, lastName: string, firstName: string, age: number, rozmirHabarya: number,
                habarnyk?: boolean) {
        super(weight, height);
        this.weight = weight;
        this.height = height;
        this.lastName = lastName;
        this.firstName = firstName;
        this.age = age;
        this.habarnyk = habarnyk;
        this.rozmirHabarya = rozmirHabarya;
    }

    datyHabar(suma) {
        if (this.habarnyk === true) {
            this.rozmirHabarya += suma;
           return console.log('Всьо організуємо!')
        } else {
            if (suma < 500000) {
                return console.log('Ти що собі дозволяєш!')
            } else {
                return console.log('Я подумаю...')
            }
        }
    }

}


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

class Frakciya {
    spysokDeputativ: string[];

    constructor(spysokDeputativ: string[]) {
        this.spysokDeputativ = spysokDeputativ;
    }


}

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