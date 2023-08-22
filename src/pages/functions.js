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
