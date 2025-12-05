const board = document.getElementById('board');
const message = document.getElementById('message');
const icons = ['🍩', '🍉', '🌸', '🌈', '💖', '⭐', '🍓', '🐱']; // Cute icons for cards
let cards = [];
let flippedCards = [];
let matchedCards = [];

// Generate the card board
function generateBoard() {
  const gameIcons = [...icons, ...icons]; // duplicate for pairs
  cards = gameIcons.sort(() => Math.random() - 0.5); // shuffle

  board.innerHTML = '';
  for (let i = 0; i < cards.length; i++) {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.setAttribute('data-id', i);

    // Support both click and touch for mobile
    cardElement.addEventListener('click', flipCard);
    cardElement.addEventListener('touchstart', flipCard);

    board.appendChild(cardElement);
  }
}

// Flip a card
function flipCard(event) {
  const clickedCard = event.currentTarget; // use currentTarget for touch/click consistency

  if (flippedCards.length === 2 || clickedCard.classList.contains('flipped')) return;

  const cardId = clickedCard.getAttribute('data-id');
  clickedCard.classList.add('flipped');
  clickedCard.textContent = cards[cardId];
  flippedCards.push({ card: clickedCard, id: cardId });

  if (flippedCards.length === 2) {
    setTimeout(checkMatch, 500); // slight delay before checking
  }
}

// Check if flipped cards match
function checkMatch() {
  const [card1, card2] = flippedCards;

  if (cards[card1.id] === cards[card2.id]) { // Compare emojis, not positions
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
    }, 1000);
  }
}

// Register service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then((registration) => {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch((error) => {
        console.log('Service Worker registration failed:', error);
      });
  });
}

// Initialize game
generateBoard();
