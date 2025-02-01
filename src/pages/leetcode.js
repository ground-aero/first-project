// @import './index.css'
//1.1st commit
//1st commit
//2nd commit.
//3rd commit
//4th commit.

//5th commit, but in dev. (5th was made in main also).
//6th commit.
//7th commit.

// ==== Leetcode ===========================================================================================================

// = Given two arrays of strings list1 and list2,
// Return all the common strings with the least index sum. Return the answer in any order.
// /**
//  * @param {string[]} list1
//  * @param {string[]} list2
//  * @return {string[]}
//  */
// let list1 = ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'];
// let list2 = [
//   'Piatti',
//   'The Grill at Torrey Pines',
//   'Hungry Hunter Steakhouse',
//   'Shogun',
// ];

// let findRestaurant = function (list1, list2) {
//   // ToDo: 1.find only common string(s)
//   // 1.1. отфильтровать дублируемые айтемы
//   let duplicatedItems = [...new Set(list1)].filter((item) =>
//     list2.includes(item)
//   );

//   return duplicatedItems;
// };

// console.log(findRestaurant(list1, list2));

// //
// let c = 5;
// console.log(Math.pow(c, 3));

// =============================================================
// let addToArray = function(num, k) {
//   // let sum = Number(num.join('')) + key
//   // return String(sum).split('').map((s) => {
//   //   return Number(s)
//   // })
//   let sum = (BigInt(num.join('')) + BigInt(k))
//   return String(sum).split('')
//   // return String(sum).split('').map((s) => Number(s))
// }
//
// console.log(addToArray([1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,0,6,3], 516))






// ===============================================================================================================
// ===============================================================================================================

// let user1 = {
//   user: 'Eugen',
//   age: 42
// }
//
// const {user: userName} = user1
//   console.log(userName)
// =====
// console.log('LOFTBLOG'.slice(4))

// ===============================
// function Animal(type, phrase) {
// //this = {}
//   this.type = type
//   this.phrase = phrase
//
//   this.say = function() {
//     console.log(`${this.type} says ${this.phrase}`);
//   }
//   //return this
// }
//
// const fox = new Animal('fox', 'woopwoopwoop');
// const tRex = new Animal('T-rex', 'ЯAWR');
//
// fox.say(); // fox says woopwoopwoop
// tRex.say(); // T-rex says ЯAWR

// ====================================================

// function capitalize(str) {
//   //возвращать новую строку
//   let newStr = str.split(' ')
//
//  const a = newStr.map((word) => {
//
//     return `${word[0].toUpperCase()}${word.slice(1)}`
//   })
//
//   return a.join(' ')
// }
//
// console.log(capitalize('Надоел, надоел, надоел ты'))
// capitalize('Надоел, надоел, надоел ты'); // Надоел, Надоел, Надоел Ты
// capitalize('Надоели, надоели, надоели вы все'); // Надоели, Надоели, Надоели Вы Все
// capitalize('Прошу уходи, уходи'); // Прошу Уходи, Уходи

//=======================================================
/** Посчитать гласные из заданного массива */
// const vowels = ['а', 'я', 'о', 'ё', 'у', 'ю', 'ы', 'и', 'э', 'е'];

// function findVowels(str) {
//      // let a = str.split('').contains(vowels)
//     let count = 0

//     for (let letter of str) {
//         if (vowels.includes(letter)) {
//             count++
//         }
//     }

//     return count
// }

// console.log(findVowels('здравствуй'))
// // findVowels('здравствуй'); // 2
// // findVowels('привет'); // 2
// console.log(findVowels('хеллоу'))
// // findVowels('хеллоу'); // 3

//====================================================
// function reverseWords(str) {
//   //разбить отдельно слова по пробелам
//   let rWords = str.split(' ')
//   //применить реверс к словам
//   return rWords.reverse().join(' ')
// }
//
// console.log(reverseWords('всегда много путей достичь цель есть'))
// reverseWords('всегда много путей достичь цель есть'); // "есть цель достичь путей много всегда"
// reverseWords('испробовать их все должны вы'); // "вы должны все их испробовать"

// ====== JSON stringify ===================================
// console.log(JSON.stringify([1, 2, 3]))
//
// console.log(JSON.parse(JSON.stringify([1, 2, 3])))

// === Destructuring ========================================

// const process = {
//   GET: 100,
//     PORT: 3000,
// }
//
// let {PORT} = process;
//
// console.log(PORT)

// ==== ======================================================
//     function addToArr(n,m,o) {
//       let str1 = n.toString()
//   let str2 = m.toString()
//   let str3 = o.toString()
//   return str1.concat(str2).concat(str3).split('').map(s=>Number(s))
// }
//
// console.log(addToArr(123456, 77777,999))

// ==== Evens Only - filter() ===============================
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//
// const evenOnly = nums.filter(function(n) {
//   const remainder = n % 3;
//   return remainder === 0
// })
//
// console.log(evenOnly)

// -----------------------------------------------
// const data = {
//   ducks: [
//     {
//       id: 0,
//       name: "Уткопёс",
//       description:
//           "Эта редкая утка несколько раз была замечена в Центральной Европе. Достоверные источники сообщают, что однажды уткопёс был замечен около озера в парке, где он играл со старыми носками. Несколько лет назад редактору National Cryptoducks посчастливилось встретить эту утку. «Она была такая милая и дружелюбная! И совсем не страшная. Мне удалось понаблюдать за ней минут 15 или 20, а потом раз! И уткопёс как комета пересёк озеро и исчез во тьме.",
//       img: "/duck-images/dog-duck.png",
//     },
//     {
//       id: 1,
//       name: "Жикря-краф",
//       description:
//           "Самая высокая криптоутка в истории. В тайных архивах обнаружены обрывистые воспоминания путешественники Василия Жилина об ужасающей встрече с представителем этого вида: «Это было летом 1962 г. Мы разбили лагерь, все уже легли спать, когда из кустов раздалось странное шуршание. Включив фонарик, я увидел... Эта длинная шея... метр, не иначе! Я до сих пор помню это кряканье. Ужасное, ужасное кряканье.",
//       img: "/duck-images/giraffe-duck.png",
//     },
//     {
//       id: 2,
//       name: "Зебрутка",
//       description:
//           "Эта пугливая красавица была замечена в Центральной Африке. Криптоуктологи установили, что этих величественных зеброуток можно встретить только в безветренную ночь на горе под полной луной в зените.",
//       img: "/duck-images/zebra-duck.png",
//     },
//     {
//       id: 3,
//       name: "Неопознанная летающая утка",
//       description:
//           "Многие встречали этих уток. Учёные до сих пор не знают, зачем они продолжают посещать нашу планету. Каковы их намерения? Они мирные наблюдатели или злодеи? Возможно, мы никогда не узнаем правды.",
//       img: "/duck-images/ufo-duck.png",
//     },
//   ],
// };
//
// console.log(data)

//=================================================
// function makeConsoleMessage(text) {
//   function consoleMessage(text2) { // добавьте функции параметр
//     console.log(text + text2); // и используйте его в вызове console.log
//   }
//
//   return consoleMessage;
// }
//
// const consoleHello = makeConsoleMessage('Привет, ');
// const consoleGoodBye = makeConsoleMessage('Пока, ');
// const consoleHemingway = makeConsoleMessage('Прощай, ');
//
// consoleHello('Андрей'); // "Привет, Андрей"
// consoleGoodBye('Ирина'); // "Пока, Ирина"
// consoleHemingway('оружие!'); // "Прощай, оружие!"

//================================================
// const obj = {
//     obj1: {
//         id: 12345,
//         email: 'aero@mail.ru'
//     }
// }
//
// const {obj1} = obj
//
// console.log(obj1);

//==========================================
// function getProperty(obj,path) {
//   const arr = path.split('.')
//     console.log(arr)
//     let res = obj
//
//     for (let i = 0; i < arr.length; i += 1 ) {
//         res = res[arr[i]];
//     }
//
//   return res
// }
//
// const object = {
//   one: 1,
//   two: {
//     three: 3
//   },
//   four: {
//     five: {
//       six: 6
//     }
//   }
// };
//
// console.log(getProperty(object, 'one')) // 1
// console.log(getProperty(object, 'two.three'))
// console.log(getProperty(object, 'four.five.six'))
// getProperty(object, 'two.three');
//======================================================
// const arrNums = [1,2,3,4,5,6,7,]

// const doubled = arrNums.map((number) => number * 2)
// const arrFrom = Array.from((arrNums) => {})

// console.log(doubled);

//-----------------------------------------------------------------------

//DOM
// const div = document.createElement('div')
// div.className = 'great';
// div.innerHTML = '<strong>Hi, everybody</strong>, youve read important message!'
// div.innerHTML = '<strong>Hi, everybody</strong>, youve read important messagesss!'
//
// document.body.append(div)

//-----------------------------------------------------------------------

// fullName = {
//   name: 'Eugene',
//   lastName: 'Avdeev',
//   profession: 'Web Developer',
//   link: 'http://....',
// }

// const fullObj = function (formValue) {
//     const objInFn = {
//       name: formValue.name,
//       link: formValue.link,
//     };
//       console.log(objInFn);
//   }

// const newPerson = new fullObj(fullName);

// console.log(newPerson)

// const formV =

//----------------------------------------------
// function task(){
//     return new Promise((resolve, reject) => {
//         console.log('1')
//         setTimeout(() => {
//             resolve('Ok')
//         }, 2000)
//     })
// }

// console.log('before')
// task()
//     .then((data) => {
//         console.log('RESOLVED PROMISE', data)
//     })
//     .catch((err) => {
//         console.log('rejectedd', err)
//     })

// console.log('after')

//------------------------------------

// Here some change for git

// for (i in author.rights) {
//     x = author.rights[i]
//     console.log(x)
// }

// function Person(firstName, lastName, born) {
//     //this = {}
//     this.firstName = firstName
//     this.lastName = lastName
//     this.born = born
//
//     //return this
// }

// Person.prototype.age = function() {
//     let now = new Date();
//
//     return now.getFullYear() - this.born;
// }

// let person = new Person('Eugen', 'Avdeev', 1980)
//
// console.log(person)//Person{firstName:..., lastName:..., born: 1980}
// console.log(person.age())//42

// bind ----------------------------------------------------------------------------------------

// const employee1 = {
//     name: "Mary",
//     position: "Web-designer",
//     salary: 900,
// }
//
// const employee2 = {
//     name: "Eugene",
//     position: "Web-developer",
//     salary: 900,
// }
//
// function promote(newPosition, salaryAdd) {
//     this.position = newPosition
//     this.salary += salaryAdd
//
//     return this.name+" is "+this.position+" and earns S"+this.salary
// }
//
// const MaryAdd = promote.bind(employee1)
//  console.log(MaryAdd("Head", 500))
//
// const EugenAdd = promote.bind(employee2)
// console.log(EugenAdd("Owner", 1000))
// ------------------------------------------------------------------

// this string added
// fetch('https://mesto.nomoreparties.co/v1/cohort-51/cards', {
//     headers: {
//         authorization: '428b584a-5472-4fac-aca2-5c3d80bec64e'
//     }
// })
//     .then(res => res.json())
//     .then((result) => {
//         console.log(result);
//     });

//---------------------------------------

// console.log(Square.calculateArea())

// const genObj = {
//     Man: function(name) {
//         this.name = name;
//         this.isAdult = false;
//         // this.sayHello = function() {
//         //     return "Меня зовут" + " " + this.name
//         // }
//         return this
//     }
// };
//
// genObj.Man.prototype.sayHello = function() {
//     return "Привет, меня зовут " + this.name
// }
//
// const zhenya = new genObj.Man('Evgeniy')
// const petr = new genObj.Man('Peter')
//
// console.log(zhenya)
// console.log(zhenya.sayHello())
// console.log(petr.sayHello())
//
// console.log(zhenya.constructor)

// console.log(zhenya)
// console.log(zhenya.name)

// const buttonsDiv = document.querySelector('.buttons-div')
// // const button = document.querySelector('.btn')

// function handleBtn() {
//   console.log('clicked button');
// }

// buttonsDiv.addEventListener('click', function(event) {
//   if (event.target.closest('.btn')) {
//     handleBtn()
//   }
// })

// ----------------------------------------

// buttonsDiv.addEventListener('click', function(event) {
//   if (event.target.closest('.btn')) {
//     handleBtns()
//   }
// })

// for (const key in userInfo) {
//     console.log(key)
// }

// SPRINT - 9 --------------------------------------------------
// const tweets = [
//   'Какой-то странный тред',
//   'Твит, адресованный Илону Маску',
//   'Ответ на инфоповод',
// ];

// tweets.forEach((tweet) => {
//     console.log(tweet)
// })

// -- Напишем функциональность для отображения твитов на странице.

// const elements = document.querySelectorAll("*")

// const myArr = Array.from(elements)

//  console.log(elements)
//  console.log(myArr)
