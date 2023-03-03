// let arrObjects = [
//     {
//         id: 1,
//         name: "eugene",
//         age: 42
//     },
//     {
//         id: 2,
//         name: 'Sonya',
//         age: 36
//     },
// ]

// const [obj1, obj2] = arrObjects

// console.log(obj1, obj2)
//---------------------------------------------------
// let browserType = ['mozilla','firefox','google'];
//
// //1.copy with equals
// const copyBrowser = browserType
//  console.log(copyBrowser)
//   console.log(browserType === copyBrowser)//true
//
// //2.copy with ...spread
// const copyWithSpread = [...browserType]
//  console.log(copyWithSpread)
//   console.log(browserType === copyWithSpread)//false
//
// //3.copy with slice
// const copyWithSlice = browserType.slice()
//  console.log(copyWithSlice)
//   console.log(copyWithSlice === browserType)//false
//
// //4.Object.assign()
// const copyWithAssign = []
// Object.assign(copyWithAssign, browserType)//false
//  console.log(copyWithAssign)
//
// //5.shallow copy with Array.from()
// const copyWithArrayFrom = Array.from(browserType)
//  console.log(copyWithArrayFrom)
//   console.log(copyWithArrayFrom === browserType)//false

// const copyWithMap = browserType.map(function(item,ind) {
//     return ind + 1 + '. ' + item
// });
//  console.log(copyWithMap);

// console.log(browserType.length);

// function sortMyString(S) { -----------------------------------------------------
//     // console.log(S.split('').join(''));//arr
//
//
//     let evens = S.split('').filter((el, ind) => ind % 2 === 0).join('')
//     let odds = S.split('').filter((el, ind) => ind % 2 !== 0).join('')
//
//     return evens + ' ' + odds
// }

// console.log(sortMyString('CodeWars'));