// проба пера...............
// let a = ''
// console.log(a.length === 0)


// let sum = {};

// function Summary({ card, id }) {
//   console.log({ card });
//   sum = card + id;

//   return sum;
// }

// console.log(Summary({ card: 3, id: 4 }));

// ------------------------------------------

// let num = 85417627;

// function fn(n) {
  // ЗАДАНИЕ: обрезать до 5-ти значного число, которое делилось бы на 18

  // Оставить в num 5-ти значное число, которое делилось бы / на 18

  // разбиваем число на 8 разных цифр:
  // let arr = String(n).split(''); // [8, 5, 4, 1, 7, 6, 2, 7] length: 8

  // составить 5-ти значное число из данных 8 цифр, чтобы они делились бы на / 18
  // склеить 5 символов, перевести в число

  // РАНДОМНО ОТОБРАТЬ ЧИСЛА () которые бы делились на / 18 !!!!!!!!!!
  //  конкатенировать несколько букв из массива !!!!!!!!!!!!!!!!!!!!
  //   arr.forEach();

  // filter ??

  // if (n % 18 === 0) {
  // }
  // let a = n % 18 === 0
  // //
//   return arr;
// }

// console.log(fn(85417627));

// length = 4

// запись в массив поступающих данных карточек {}-------------------------------
// let arr = [
//     {id:1, name: 'film1'},
//     {id:2, name: 'film2'},
// ]
// let arr = [
//     { id: 1, name: 'film1' }
// ]

// const result = arr.map(ar => {
//     return ar
// })

// console.log(result);
// let isSavedCards = []
// let addedCard = { id: 1, name: 'card1' };
// let addedCard2 = { id: 2, name: 'card2' };
// let addedCard44 = { id: 44, name: 'card44' };

// // const arrCards = isSavedCards.map((item) => item);
// //  arrCards.push(addedCard, addedCard2);
// const arr = [addedCard]

// console.log(arr);

//  arrCards.push(addedCard44);
// console.log(arrCards);

// ===== Область видимости ф-ций =============================================
// function callMe() {
//     const internet = 'Internet';
//
//     function callMeToo() {
//         console.log(internet);
//     }
//
//     return callMeToo;
// }
//
// const newCallMeToo = callMe();
// console.log(newCallMeToo()); // "Internet"

//==== callback function ======================================

// function initialFn() {
//     console.log('initial function 1')
// }
//
// function fnWithCallBack(thirdFn) {
//     thirdFn()
// }
//
// fnWithCallBack(initialFn)
