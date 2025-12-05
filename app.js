const board = document.getElementById('board');
const message = document.getElementById('message');
const icons = ['🍩', '🍉', '🌸', '🌈', '💖', '⭐', '🍓', '🐱']; // Cute icons for cards
let cards = [];
let flippedCards = [];
let matchedCards = [];

function generateBoard() {
  // Duplicate the icons to make pairs, then shuffle them
  const gameIcons = [...icons, ...icons];
  cards = gameIcons.sort(() => Math.random() - 0.5); // Shuffle the array

  // Create card elements
  board.innerHTML = '';
  for (let i = 0; i < cards.length; i++) {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    board.appendChild(cardElement);
  }
}

function flipCard(event) {
  const clickedCard = event.target;

  if (flippedCards.length === 2 || clickedCard.classList.contains('flipped')) {
    return; // If two cards are already flipped, or this card is already flipped, do nothing
  }

  // Flip the card
  const cardId = clickedCard.getAttribute('data-id');
  clickedCard.classList.add('flipped');
  clickedCard.textContent = cards[cardId];
  flippedCards.push({ card: clickedCard, id: cardId });

  if (flippedCards.length === 2) {
    checkMatch();
  }
}

function checkMatch() {
  const [card1, card2] = flippedCards;
  if (card1.id === card2.id) {
    matchedCards.push(card1.card, card2.card);
    flippedCards = [];
    if (matchedCards.length === cards.length) {
      message.textContent = "You win! 🎉";
    }
  } else {
    setTimeout(() => {
      card1.card.textContent = '';
      card2.card.textContent = '';
      card1.card.classList.remove('flipped');
      card2.card.classList.remove('flipped');
      flippedCards = [];
    }, 1000); // Wait 1 second before flipping back
  }
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
    console.log('Service Worker registered with scope:', registration.scope);
  });
}

generateBoard();