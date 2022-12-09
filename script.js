
//1.1st commit
//1st commit
//2nd commit.
//3rd commit
//4th commit.

function task(){
    return new Promise((resolve, reject) => {
        console.log('1')
        setTimeout(() => {
            resolve('Ok')
        }, 2000)
    })
}

console.log('before')
task()
    .then((data) => {
        console.log('RESOLVED PROMISE', data)
    })
    .catch((err) => {
        console.log('rejectedd', err)
    })

console.log('after')

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


// bind --------------------------------------------------------

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
