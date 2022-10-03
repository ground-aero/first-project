const buttonsDiv = document.querySelector('.buttons-div')
// const button = document.querySelector('.btn')

function handleBtn() {
  console.log('clicked button');
}

buttonsDiv.addEventListener('click', function(event) {
  if (event.target.closest('.btn')) {
    handleBtn()
  }
})


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
