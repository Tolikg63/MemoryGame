document.addEventListener('DOMContentLoaded', () => {
   const cardArray = [
      {
         name: 'grape',
         img: 'images/grape.png'
      },
      {
         name: 'grape',
         img: 'images/grape.png'
      },
      {
         name: 'pizza',
         img: 'images/pizza.png'
      },
      {
         name: 'pizza',
         img: 'images/pizza.png'
      },
      {
         name: 'strawberry',
         img: 'images/strawberry.png'
      },
      {
         name: 'strawberry',
         img: 'images/strawberry.png'
      },
      {
         name: 'lobster',
         img: 'images/lobster.png'
      },
      {
         name: 'lobster',
         img: 'images/lobster.png'
      },
      {
         name: 'cheese',
         img: 'images/cheese.png'
      },
      {
         name: 'cheese',
         img: 'images/cheese.png'
      },
      {
         name: 'avocado',
         img: 'images/avocado.png'
      },
      {
         name: 'avocado',
         img: 'images/avocado.png'
      },
   ]

cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('.grid');
const resultDisplay = document.querySelector('#result');
let cardsChosen = [];
let cardsChosenId = [];
let cardsWon = [];

function createBoard() {
   for (let i = 0; i < cardArray.length; i++) {
      let card = document.createElement('img');
      card.setAttribute('src', 'images/bg.png');
      card.setAttribute('data-id', i);
      card.addEventListener('click', flipCard);
      grid.append(card);
   }
}


function checkForMatch() {
   let cards = document.querySelectorAll('img');
   const optionOneId = cardsChosenId[0];
   const optionTwoId = cardsChosenId[1];
   if (cardsChosen[0] === cardsChosen[1]) {
      // alert("You found a match");
      cards[optionOneId].setAttribute('src', 'images/cross.png');
      cards[optionTwoId].setAttribute('src', 'images/cross.png');
      cardsWon.push(cardsChosen);
   } else {
      cards[optionOneId].setAttribute('src', 'images/bg.png');
      cards[optionTwoId].setAttribute('src', 'images/bg.png');
      // alert("Try again!");
   }
   cardsChosen = [];
   cardsChosenId = [];
   resultDisplay.textContent = `Score ${cardsWon.length}`;
   if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = "Congratulations, You Win";
   }
}

function flipCard() {
   let cardId = this.getAttribute('data-id');
   cardsChosen.push(cardArray[cardId].name);
   cardsChosenId.push(cardId);
   this.setAttribute('src', cardArray[cardId].img);
   if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
   }
}

createBoard();
})