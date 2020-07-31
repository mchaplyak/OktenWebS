//Task1:
// let myTime = 0;
//
// function wakeUp(isEyesOpen, cb) {
//     setTimeout(() => {
//         if (isEyesOpen) {
//         myTime = myTime + 720;
//         cb(null, myTime);
//         } else {
//             cb('ZzZzZzZz', null);
//         }
//     }, 1000)
// }
//
//
// function goShower(myTime, water, cb) {
//     setTimeout(() => {
//         if (myTime > 10 && water) {
//             console.log('Миюсь...');
//             myTime = myTime - 10;
//             cb (null, myTime);
//         } else if (!(water)){
//             console.error('Немає води, біда!');
//             cb('Немає часу!', null);
//         } else {
//             console.error('Ти запізнився!');
//             cb('Немає часу!', null);
//         }
//     }, 500)
// }
//
// function goEat (myTime, food, cb) {
//     setTimeout(()=> {
//         if (myTime > 30 && food) {
//             console.log('Їм...');
//             myTime = myTime - 30;
//             cb (null, myTime);
//         } else if (!(food)) {
//             console.error('Нема що їсти!');
//             cb('Немає часу!', null);
//         } else {
//             console.error('Ти запізнився!');
//             cb('Немає часу!', null);
//         }
//     }, 100)
// }
//
// function goWear (myTime, clotheClear, cb) {
//     setTimeout(()=> {
//         if (myTime > 15 && clotheClear) {
//             console.log('Одягаюсь...');
//             myTime = myTime - 15;
//             cb (null, myTime);
//         } else if (!(clotheClear)) {
//             console.error('Попери одяг!!');
//             cb('Немає часу!', null);
//         } else  {
//             console.error('Ти запізнився!!');
//             cb('Немає часу!', null);
//         }
//     }, 700);
// }
//
// function goWork (myTime, transport, cb) {
//     setTimeout(() => {
//         if (myTime > 20 && transport) {
//             console.log('Їдемо...');
//             myTime = myTime - 20;
//             cb (null, myTime);
//         } else if (!(transport)) {
//             console.error('Немає маршрутки, ти запізнився!');
//             cb('Немає часу!', null);
//         } else  {
//             console.error('Ти запізнився!');
//             cb('Немає часу!', null);
//         }
//     }, 50);
// }
//
//
// function working(myTime, internet, cb) {
//     setTimeout(() => {
//         if (myTime > 480 && internet) {
//             console.log('Працюємо...');
//             myTime = myTime - 480;
//             cb (null, myTime);
//         } else if (!(internet)) {
//             console.error('Немає Інтернету, проект не зданий!');
//             cb('Немає часу!', null);
//         } else  {
//             console.error('Ти запізнився!');
//             cb('Немає часу!', null);
//         }
//     }, 320);
// }
//
// function goHome (myTime, projectDone, cb) {
//     setTimeout(() => {
//         if (myTime && projectDone) {
//             console.log('Їдемо додому...');
//             myTime = myTime - 25;
//             cb (null, myTime);
//         } else if (!(projectDone)) {
//             console.error('Проект не закінченний, тебе звільнили!');
//             cb('Немає часу!', null);
//         } else {
//             console.error('Тебе звільнили');
//             cb('Немає часу!', null);
//         }
//     }, 10);
// }
//
// wakeUp(true, (err, myTime) => {
//     if (err) {
//         document.write(`<h3>Спокійного сну...</h3>`);
//     } else {
//         document.write('<h3>Доброго ранку!</h3>');
//         goShower(myTime, true, (errTwo) => {
//             if (errTwo) {
//                 document.write(`<h3>Ти запізнився!</h3>`);
//             } else {
//                 document.write(`<h3>Тепер ти чистий!</h3>`);
//                 goEat(myTime, true, (errThree) => {
//                     if (errThree) {
//                         document.write(`<h3>Ти запізнився!</h3>`);
//                     } else {
//                         document.write(`<h3>Смачного сніданку!</h3>`);
//                         goWear(myTime, true, (errFour) =>{
//                             if (errFour) {
//                                 document.write(`<h3>Ти запізнився!</h3>`);
//                             } else {
//                                 document.write(`<h3>Ти одягнувся, пора на роботу!</h3>`);
//                                 goWork(myTime, true, (errFive) => {
//                                     if (errFive) {
//                                         document.write(`<h3>Ти запізнився на роюоту, тебе звільнили!</h3>`);
//                                     } else {
//                                         document.write(`<h3>Ти на роботі, працюй!</h3>`);
//                                         working(myTime, true, (errSix) => {
//                                             if (errSix) {
//                                                 document.write(`<h3>Проект не зданий, тебе звільнили!</h3>`);
//                                             } else {
//                                                 document.write(`<h3>Гарно попрацював, пора до дому!</h3>`);
//                                                 goHome(myTime, true, (errSeven) => {
//                                                     if (errSeven) {
//                                                         document.write(`<h3>Тебе звільнили, проект не зданий!</h3>`);
//                                                     } else {
//                                                         document.write(`<h2>Ти вдома, відпочивай!</h2>`);
//                                                     }
//                                                 });
//                                             }
//                                         });
//                                     }
//                                 });
//                             }
//                         });
//                     }
//                 });
//             }
//         });
//     }
// });



//Task2:
let myTime = 0;

function wakeUp(isEyesOpen) {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (isEyesOpen) {
            myTime = myTime + 720;
            resolve(myTime);
        } else {
            reject('ZzZzZzZz');
        }
    }, 1000)
    })}


function goShower(myTime, water) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        if (myTime > 10 && water) {
            console.log('Миюсь...');
            myTime = myTime - 10;
            resolve ( myTime);
        } else if (!(water)){
            console.error('Немає води, біда!');
            reject('Немає часу!');
        } else {
            console.error('Ти запізнився!');
            reject('Немає часу!');
        }
    }, 500)
    })}


function goEat (myTime, food) {
    return new Promise((resolve, reject) => {
            setTimeout(()=> {
        if (myTime > 30 && food) {
            console.log('Їм...');
            myTime = myTime - 30;
            resolve (myTime);
        } else if (!(food)) {
            console.error('Нема що їсти!');
            reject ('Немає часу!', null);
        } else {
            console.error('Ти запізнився!');
            reject('Немає часу!');
        }
    }, 100)
    })}

function goWear (myTime, clotheClear) {
    return new Promise ((resolve, reject) => {
        setTimeout(()=> {
        if (myTime > 15 && clotheClear) {
            console.log('Одягаюсь...');
            myTime = myTime - 15;
            resolve (myTime);
        } else if (!(clotheClear)) {
            console.error('Попери одяг!!');
            reject ('Немає часу!', null);
        } else  {
            console.error('Ти запізнився!!');
            reject('Немає часу!', null);
        }
    }, 700);
    })}

function goWork (myTime, transport) {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (myTime > 20 && transport) {
            console.log('Їдемо...');
            myTime = myTime - 20;
            resolve (myTime);
        } else if (!(transport)) {
            console.error('Немає маршрутки, ти запізнився!');
            reject('Немає часу!');
        } else  {
            console.error('Ти запізнився!');
            reject('Немає часу!');
        }
    }, 50);
})}


function working(myTime, internet) {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (myTime > 480 && internet) {
            console.log('Працюємо...');
            myTime = myTime - 480;
            resolve (null, myTime);
        } else if (!(internet)) {
            console.error('Немає Інтернету, проект не зданий!');
            reject('Немає часу!', null);
        } else  {
            console.error('Ти запізнився!');
            reject('Немає часу!', null);
        }
    }, 320);
})}

function goHome (myTime, projectDone, cb) {
    setTimeout(() => {
        if (myTime && projectDone) {
            console.log('Їдемо додому...');
            myTime = myTime - 25;
            cb (null, myTime);
        } else if (!(projectDone)) {
            console.error('Проект не закінченний, тебе звільнили!');
            cb('Немає часу!', null);
        } else {
            console.error('Тебе звільнили');
            cb('Немає часу!', null);
        }
    }, 10);
}