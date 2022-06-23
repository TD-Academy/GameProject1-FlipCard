const cards = document.querySelectorAll('.card');

var flippedCard = false;
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