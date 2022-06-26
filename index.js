axios.get('http://localhost:3000/words').then(resp => {
  console.log(resp.data);
  var data = resp.data;
  for (let key in data) {
    if (data.hasOwnProperty(key))
    {
        value = data[key];
        console.log(key, value);
    }
  }
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

var front = document.getElementById('1').getElementsByClassName('front')[0]
var back = document.getElementById('1').getElementsByClassName('back')[0]
front.textContent = 'sdfghjk'
back.textContent = '123'