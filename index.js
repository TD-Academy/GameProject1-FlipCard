var card = document.querySelectorAll('.card');

[...card].forEach((card)=>{
    card.addEventListener( 'click', function() {
      card.classList.toggle('flip');
    });
  });

const timeout = setTimeout(flipBack, 3000)

function flipBack () {
  [...card].forEach((card)=>{
    card.classList.toggle('flip');
  });
}