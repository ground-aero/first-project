// PLAYGROUND:

// let str1 = 'А роза упала на лапу Азора'

let space = ' '

console.log(space.toLowerCase() !== space.toUpperCase())


let str = 'Казак азак'
// let str1 = 'Madam Adam'
console.log(str.split(' ').join('').toLowerCase(), str.length)

function isEquals(str1, str2) {
  return str1.toLowerCase() === str2.toLowerCase()
}

function isLetter(char) {
  return char.toLowerCase() !== char.toUpperCase()
}

function isPalindrome(str) {

  let start = 0
  let end = str.length - 1

  // str1.split('')
  // str1.split(' ').join('')

  while(start < end) {

    let firstChar = str[start]
    let lastChar = str[end]

    // if (!isLetter(firstChar)) { // если не буква (а символ)
    //   start += 1
    //   continue
    // }

    // if (!isLetter(lastChar)) {
    //   end -= 1
    //   continue
    // }

    if (!isEquals(firstChar, lastChar)) {
      return false
    }

    start += 1
    end -= 1
  }

  return true
}

console.log(isPalindrome(str))

// _------------------------------------------------------


// _------------------------------------------------------
// let items = []

// let items = [
//   {
//   name: "John",
//     age: 21,
//     class: 'man',
//   },
//   {  name: "Bill",
//     age: 22,
//     class: 'man',
//   },
//   {  name: "Yulia",
//     age: 23,
//     class: 'woman',
//   },
// ]

// const content = items.filter(item => item.class === 'woman')

// console.log(content);

// //------ цикл for...in - для перебора перечисляемых свойств объектов for Objects ------------------------------------------------
// // Перебирает ключи объекта. 
// const person = {
//   name: 'John',
//   age: 21,
//   class: 'man',
// }

// for (let key in person) {
//   console.log(`${person[key]} `); //  и возвращает значения.?
//   console.log(`${person.hasOwnProperty('name')},, ${person.hasOwnProperty('age')}`) // true,, true
// }

// const family = ['Mom','Dad','Bro']

// for (let index in family) {
//   console.log(`${index}:: ${family[index]} `); // тоже возвращает значения. Но.... не рекомендуется для массива
// }

// //------ for...of - для перебора итерируемых объектов таких как Массивы, Строки, множества (Set), карты (Map) и другие. Strings ----------------------------------------------------------------------------
// // Перебирает значения итерируемого объекта (!)
// const family2 = ['Mom','Dad','Bro'] // for...of - идеально подходит для перебора элементов массива:

// for (let element of family2) { // element - переменная, в которую будет помещаться текущий элемент на каждой итерации.
//   console.log(`${element} `); // сразу возвращает значения:: Mom nsbp Dad nsbp Bro
// }

const word = 'hello'
for (let char of word) {
  console.log(char);
}


//-------- Запись “typeof class {}” равна чему? --------------------------------------------------------

// console.log(typeof class {}); // function !


//------ Что выведется в консоль? ----------------------------------------------------------

// const aa = {};
// const bb = {};
// const cc = { [aa]: 1, [bb]: 2};
// console.log(cc[aa]+cc[aa]); // 4  !


//------ Что выведет – «new Array(10).map((item, index) => console.log(index))»? -----------------

// console.log(new Array(9)) // (10) [empty × 10] // создает новый массив с длиной 10, но без инициализации его элементов. Это означает, что массив будет содержать 10 "пустых" элементов (или "пустые слоты"), а не значения undefined.
// // 
// new Array(9).map((item, index) => console.log(index)) // (!) не выведет ничего в консоль.

//------  const arr = []; arr[30] = 0; - чему равен arr.length? ----------------------------------------------------------

// const arr = [];
// arr[30] = 0;
// console.log(arr.length); // 31  ! // Поскольку вы присвоили значение индексу 30, длина массива будет равна 30 + 1 = 31.

//------ --------------------------------------------------------------

// console.log((~15 % 3 + 5 * 3) / 2); // 7

//------ --------------------------------------------------------------


// const a = {}
// const b = {}
// const c = {[a]: 1, [b]: 2}

// console.log(a)
// console.log(c[a]+c[a]);

//----------------------------------------------------------------

// Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.

const str9 = "This website is for losers LOL!"

function disemvowel(str9) {
  
    let vowels = ['a','e', 'i', 'o', 'u']
    // str.includes(vowels)
    
    return str9.split('').map(i => i.replace(/[aeiou]/gi, '')).join('');
  }

console.log(disemvowel(str9));


// --------------------------------------------------------------
// Complete the function that accepts a string parameter, and reverses each word in the string. 
// All spaces in the string should be retained.

// examples:"This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"
// let input = "elbuod  secaps"

// function reverseWords(str) {
//   // Go for it
//   let arr = str.split(' ');

//   let reverse = arr.map((word) => {
//     return word.split('').reverse().join('')
//   })

//   return reverse.join(' ')
// }

// console.log(reverseWords(input));


// ------------------------------------------------------------------------------------------------------

// const input = prompt('Введите число');
// const num = Number(input)

// for (let i = 1; i <= 10; i++) {

//   console.log(num)
//   if (!isNaN(num) && num !== 0) console.log(`${num} x ${i} = ${num * i}`)
//   else console.log(`введенные данные : ${num} - не являются числом`);
// }

// const arr = []

// let rabbit = {
//   type: "rabbits",
//   name: "Rabbit Bob",
//   age: 20,
// }

// let wolf = {
//   type: "woolfs",
//   name: "Wolf John",
//   age: 40,
// }

// let concat = {clients: [...arr, rabbit, wolf]}

// console.log(concat)
// console.log(concat.clients[0])

// console.log(arr)

// ======== CODEWARS ==============================================================================================



// ----------------------

// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

// let num = 9119; // проверка

// function squareDigits(num){
    
//     // рассплитовать все цифры и возвести каждое в квадрат
//     let numberToString = num.toString();
//     let numberArray = numberToString.split(''); // цифры в массиве
//     let result = numberArray.map(i => i * i) // каждую из цифр в массиве возводим в квадрат
    
// console.log(result, typeof result)

//     // сконкатенировать каждое число из result
//     let final = Number(result.join(''));

//     console.log(final, typeof final)

//     return final;
//   }

//   console.log(squareDigits(num));

//  REFACTORING: 

// function squareDigits(num){
//   return Number(num.toString().split('').map(i => i*i).join(''))
// }

// console.log(squareDigits(33), typeof squareDigits(22));



// -----------------------------
// Your job is to write a function, which takes three integers a, b, and c as arguments,
// and returns True if exactly two of of the three integers are positive numbers (greater than zero),
// and False - otherwise.
//
// function twoArePositive(a, b, c) {
//   if ((a>0 && b>0) || (b>0 && c>0) || (a>0 && c>0)) {
//
//     if (a<=0 || b<=0 || c <=0) {
//       console.log('true //if-2')
//       return true
//     }
//     console.log('false-1 //if-1')
//     return false
//   } else {
//     console.log('false-2 //else')
//     return false
//   }
// }
//
// console.log(twoArePositive(4, 6, -10));

// -----------------------------
// Help Suzuki rake his garden!
// Suzuki having a keen eye is always on the lookout for anything creeping into the garden
// that must be removed during the daily raking such as insects or moss.
// Task: Rake out any items that are not a rock or gravel and replace them with gravel such that:
// garden = 'slug spider rock gravel gravel gravel gravel gravel gravel gravel'
// let garden =
//   'gravel gravel rock slug ant slug gravel snail rock gravel slug gravel ant';
// // // Rake out any items that are not a rock or gravel and replace them with gravel such that:
// // // Returns a string with all items except a rock or gravel replaced with gravel:
// function rakeGarden(garden) {
//   // 1. TODO: Заменить в строке все слова (кроме "gravel" и "rock") на: "gravel"
//   // let b = garden.replaceAll(/slug/g, 'gravel');
//   return garden.split(' ')
//   .map(i => i === 'rock' ? 'rock' : 'gravel')
//   .join(' ')
// }

// console.log(rakeGarden(garden));

// -----------------------------
// Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!
// You need to cast the whole array to the correct type.
// Create the function that takes as a parameter a sequence of numbers
// represented as strings and outputs a sequence of numbers.
//
// function toNumberArray(stringarray) {
//   // 1. каждый элемент массива (строки) преобразовать в цифры в массиве
//   return stringarray.map(Number);
// }
// console.log(toNumberArray(['1.6', '2', '3', '', '-1']));

// ---------------------
// Complete the method that takes a boolean value and return a "Yes" string for true,
// or a "No" string for false.
// p.s: Если вызвать двойное отрицание, можно быстро привести любое выражение к логическому типу.
// function boolToWord(bool) {
//   // if bool === true => 'Yes'
//   // else => 'No'

//   if (!!bool === true) {
//     return 'Yes'
//   } else {
//     return 'No'
//   }
// }

// console.log(boolToWord(''))
// console.log(!!2);

// function switchItUp(number){ ---------------------------
// //Write your own Code!
//   switch (number) {
//     case 1:
//       return 'One';
//       break;
//     case 2:
//       return 'Two';
//       break;
//     case 3:
//       return 'Three';
//       break;
//     case 4:
//       return 'Four';
//       break;
//     case 5:
//       return 'Five';
//       break;
//     case 6:
//       return 'Six';
//       break;
//     case 7:
//       return 'Seven';
//       break;
//     case 8:
//       return 'Eight';
//       break;
//     case 9:
//       return 'Nine';
//       break;
//     default:
//       return 'Zero';
//   }
// }
//
// console.log(switchItUp(1))
// ------------------------------------------------

// =======- Write a function which calculates the average of the numbers in a given list.
// function findAverage(array) {
//   // count sum of all numbers
//   // devide the sum to number of indexes
//   // if array is empty => 0
//   let sum = 0
//   array.forEach(num => sum += num)
//
//   let average = sum / array.length;
//
//   return average || 0;
// }
//
// const list = [200,100,200,100]
//
// console.log(findAverage(list))
// console.log(list.length)

// ============================
// function mango(quantity, price){
//     let q = quantity
//     let p = price
//     let B = bonus
//
//     if (q === 2) {
//         return p * (q - 1)
//     }
//     if (q >= 3) {
//         return p * (q - 1)
//     }
//     if (q <= 5 && q >= 4) {
//         return p * (q - 1)
//     }
//     else {
//         return false
//     }
//
//     return p
// }
//
// console.log(mango(3, 3));

//-----------------------------------------------------------
// function sortMyString(S) {
//     let even = S.split('').filter((char, ind) => ind % 2 === 0).join('')
//     let odd = S.split('').filter((char, ind) => ind %2 !== 0).join('')
//
//     console.log(even, odd)
//
// }
//
// console.log(sortMyString('GreatBritain'))

//_----------------------------------------------------
// function sortMyString(S) {
//
//         let evensOdds = Array.from(S)
//
//        let evens = evensOdds.map((evens, index) => {
//             if (index % 2 === 0) {
//                 return evens
//             }
//          })
//     // console.log(evens, odds)
//
//     let odds = evensOdds.map((odds, index) => {
//         if (index % 2 !== 0) {
//             return odds
//         }
//     })
//
//     console.log(...evens.split(''), ...odds)
//
//     return `${evens.split('')} ${[...odds]}`
// }
//
// console.log(sortMyString('CodeWars'));

// --sperm chromosome
/* The male gametes or sperm cells in humans and other mammals are heterogametic and
*  contain one of two types of sex chromosomes.
* They are either X or Y. The female gametes or eggs however, contain only the X sex chromosome and are homogametic.
* The sperm cell determines the sex of an individual in this case. If a sperm cell containing an X chromosome
* fertilizes an egg, the resulting zygote will be XX or female.
* If the sperm cell contains a Y chromosome, then the resulting zygote will be XY or male.
* TASK: Determine if the sex of the offspring will be male or female based on the X or Y chromosome present in the male's sperm.**/
//
// const a = 'X' + 'X'
//
// function chromosomeCheck(sperm) {
//     return sperm.includes('Y') ?
//         "Congratulations! You're going to have a son." :
//         "Congratulations! You're going to have a daughter."
// }
//
// console.log(chromosomeCheck(a));
// console.log(a)

// ------------------------------------------------
//Write a function that finds the sum of all its arguments.

// function sum() {
//
//   let total = 0
//
//   for (let argument of arguments) {
//       total += argument
//   }
//
//   return total
// }

// console.log(sum(1, 2, 3)); // => 6
// console.log(sum(8, 2)); // => 10
// console.log(sum(1, 2, 3, 4, 5))
// => 15

// function sortMyString(S) { -----------------------------------
//     // console.log(S.split('').join(''));//arr
//
//
//     let evens = S.split('').filter((el, ind) => ind % 2 === 0).join('')
//     let odds = S.split('').filter((el, ind) => ind % 2 !== 0).join('')
//
//     return evens + ' ' + odds
// }

// console.log(sortMyString('CodeWars'));










