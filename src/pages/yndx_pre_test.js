


// _--------------------------------------------------------------------------------------------------------------------------------
// _--------------------------------------------------------------------------------------------------------------------------------

// let str1 = 'А роза упала на лапу Азора'

// let space = ' '
// console.log(space.toLowerCase() !== space.toUpperCase())


// let str = 'Казак азак'
// // let str1 = 'Madam Adam'
// console.log(str.split(' ').join('').toLowerCase(), str.length)

// function isEquals(str1, str2) {
//   return str1.toLowerCase() === str2.toLowerCase()
// }

// function isLetter(char) {
//   return char.toLowerCase() !== char.toUpperCase()
// }

// function isPalindrome(str) {

//   let start = 0
//   let end = str.length - 1

//   // str1.split('')
//   // str1.split(' ').join('')

//   while(start < end) {

//     let firstChar = str[start]
//     let lastChar = str[end]

//     // if (!isLetter(firstChar)) { // если не буква (а символ)
//     //   start += 1
//     //   continue
//     // }

//     // if (!isLetter(lastChar)) {
//     //   end -= 1
//     //   continue
//     // }

//     if (!isEquals(firstChar, lastChar)) {
//       return false
//     }

//     start += 1
//     end -= 1
//   }

//   return true
// }

// console.log(isPalindrome(str))

// _------------------------------------------------------0--------------------------------------------------------------------------
// _----------------------------------------------------- YANDEX TEST CONTEST -------------------------------------------------------
// _------------------------------------------------------0--------------------------------------------------------------------------
// _------------------------------------------------------0--------------------------------------------------------------------------

// Даны два числа A и B. Вам нужно вычислить их сумму A+B. В этой задаче для работы с входными и выходными данными 
// вы можете использовать и файлы и потоки на ваше усмотрение.
// Формат ввода Первая строка входа содержит числа AиB(−2⋅109≤A,B≤2⋅109) разделенные пробелом 
// Формат вывода В единственной строке выхода выведите сумму чисел A+B

// let a = 0
// let b = 2

// const readline = require('node:readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('', (input) => {
//   const [A, B] = input.split(' ').map(Number);
//   const sum = A + B;
//   console.log(sum);
//   rl.close();
// });

// _------------------------------------------------------2--------------------------------------------------------------------------
// _------------------------------------------------------0--------------------------------------------------------------------------
// _------------------------------------------------------0--------------------------------------------------------------------------
// _------------------------------------------------------0--------------------------------------------------------------------------
// ЗАДАНИЕ: Даны два числа A и B.  нужно вычислить их сумму A+B. В этой задаче вам нужно читать из файла и выводить ответ в файл.
// Формат ввода: Первая строка входного файла содержит числа A и B (-2 ⋅ 109 ≤ A, B ≤ 2 ⋅ 109) разделенные пробелом. 
// Формат вывода: В единственной строке выходного файла выведите сумму чисел A+B
// Требования: Ограничение времени	2 секунды, Ограничение памяти	64Mb, Ввод	input.txt, Вывод	output.txt
// const fs = require('fs');

// // Чтение данных из файла input.txt
// const input = fs.readFileSync('input.txt', 'utf8');

// // Разбиение строки на числа и преобразование их в тип Number
// const [A, B] = input.trim().split(' ').map(Number);

// // Вычисление суммы
// const sum = A + B;

// // Запись результата в файл output.txt
// fs.writeFileSync('output.txt', sum.toString());


// _------------------------------------------------------7--------------------------------------------------------------------------
// _------------------------------------------------------0--------------------------------------------------------------------------
// _------------------------------------------------------0--------------------------------------------------------------------------
// _------------------------------------------------------0--------------------------------------------------------------------------
// Даны две строки строчных латинских символов: строка J и строка S. Символы, входящие в строку J, — «драгоценности», входящие в строку S — «камни». 
// Нужно определить, какое количество символов из S одновременно являются «драгоценностями». Проще говоря, нужно проверить, 
// какое количество символов из S входит в J.
// Это разминочная задача, к которой мы размещаем готовые решения. Она очень простая и нужна для того, чтобы вы могли познакомиться с нашей автоматической системой проверки решений. Ввод и вывод осуществляется через файлы, либо через стандартные потоки ввода-вывода, как вам удобнее.

// Формат ввода: На двух первых строках входного файла содержатся две строки строчных латинских символов: строка J и строка S. Длина каждой не превосходит 100 символов.
// Формат вывода: Выходной файл должен содержать единственное число — количество камней, являющихся драгоценностями.

// Input: ab, aabbccd
// Output: 4


// let jewels = 'aavvf' //jewels
// let stones = 'abbggssa' //stones, incl. jewels

// console.log(jewels.length, stones.length)
// let count = 0

// for (let charS of stones) {
// // какое количество символов из S входит в J ?
//   if (jewels.includes(charS)) {

//     count++
//   }
// }

// console.log(count)



// _---------------------------------------------------- end --------------------------------------------------------------------------
// _------------------------------------------------------0--------------------------------------------------------------------------
// _------------------------------------------------------0--------------------------------------------------------------------------