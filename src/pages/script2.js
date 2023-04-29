// console.log(String(777))

// ====== Local Storage ======================
// const object = {
//     name: "Maxim",
//     age: 42,
// }
//
// localStorage.setItem('obj1', JSON.stringify(object))
//
// const raw = localStorage.getItem('obj1')
// const person = JSON.parse(raw)
// person.name = 'Evgenn'
//
// console.log(person)

// localStorage.setItem('person2', JSON.stringify(person))
// const raw2 = localStorage.getItem('person2')
// const person2 = JSON.parse(raw2)

//=====================================
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

