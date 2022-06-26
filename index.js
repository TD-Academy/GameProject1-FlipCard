axios.get('http://localhost:3000/words').then(resp => {
  console.log(resp.data);
});

const cards = document.querySelectorAll('.card');

var flippedCard = false;
var lockBoard = false;
var firstCard, secondCard;

function flip() {
  this.classList.toggle('flip');

  if (!flippedCard) {
    // first click
    flippedCard = true;
    firstCard = this;
  } else {
    // second click
    flippedCard = false;
    secondCard = this;
  }
}

cards.forEach(card => card.addEventListener('click', flip))




// Attempt to get the words form a json file and give it to the data property of the cards

// const fs = require('fs');

// var rawData = fs.readFileSync('data.json');
// var words_obj = JSON.parse(rawData);
// var words = []

// function sortData(words_obj, words) {
//   for (word in words_obj) {
//     words.push(word)
//     words.push(words_obj[word])
//   }
// }
// sortData(words_obj, words)

// function shuffle(arr) {
//   let currentIndex = arr.length,  randomIndex;

//   while (currentIndex != 0) {

//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex--;

//     [arr[currentIndex], arr[randomIndex]] = [
//       arr[randomIndex], arr[currentIndex]];
//   }

//   return arr;
// }

// var words_shuffled = shuffle(words)

// function giveData (data) {
//   for (var x=0; x<data.length; x++) {
//     for (var i=0; i<=16; i++) {
//       var div = document.getElementById(i.toString())
//       div.dataset.word = data[x]
//       console.log('asfsfsf')
//       break
//     }
//   }
// }

// giveData(words_shuffled)