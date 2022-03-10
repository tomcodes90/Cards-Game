// Deck class
class Card {
  constructor(value) {
    this.value = value;
  }
}
class Deck {
  constructor() {
    this.cards = [];
  }

  createDeck() {
    let values = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ];

    for (let i = 0; i < values.length; i++) {
      this.cards.push(new Card(values[i]));
    }
  }
  shuffleDeck() {
    let leftHand, rightHand, shuffleAction;
    for (let i = 0; i < 21; i++) {
      leftHand = Math.floor(Math.random() * this.cards.length);
      rightHand = Math.floor(Math.random() * this.cards.length);
      shuffleAction = this.cards[leftHand];
      this.cards[leftHand] = this.cards[rightHand];
      this.cards[rightHand] = shuffleAction;
    }
  }
}

// Player class

class player {
  constructor(name) {
    this.name = name;
    this.playerDeck = [];
    this.playerCard;
  }
}
// Game logic

let limboDeck = [];
let freshDeck = new Deck();
freshDeck.createDeck();
freshDeck.shuffleDeck();
const player1 = new player("player1");
const player2 = new player("player2");
player1.playerDeck = freshDeck.cards.slice(0, 10);
player2.playerDeck = freshDeck.cards.slice(10, 20);

function nextRound() {
  player1.playerCard = player1.playerDeck.pop();
  player2.playerCard = player2.playerDeck.pop();
  if (player1.playerCard.value > player2.playerCard.value) {
    player1.playerDeck.push(player1.playerCard, player2.playerCard);
    console.log("Player 1 wins the round!");
  } else if (player1.playerCard.value === player2.playerCard.value) {
    limboDeck.push(player1.playerCard, player2.playerCard);
    console.log("Draw! Cards in the Limbo!!");
  } else {
    player2.playerDeck.push(player1.playerCard, player2.playerCard);
    console.log("Player 2 wins the round!");
  }
  console.log(`Player 1 cards count: ${player1.playerDeck.length}`);
  console.log(`Player 2 cards count: ${player2.playerDeck.length}`);
  if (player2.playerDeck.length == []) {
    console.log("You win the game!!");
  }
  if (player1.playerDeck.length == []) {
    console.log("You lost the game!!");
  }
}
