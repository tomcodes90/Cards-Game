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
    for (let i = 0; i < 20; i++) {
      leftHand = Math.floor(Math.random() * this.cards.length);
      rightHand = Math.floor(Math.random() * this.cards.length);
      shuffleAction = this.cards[leftHand];
      this.cards[leftHand] = this.cards[rightHand];
      this.cards[rightHand] = shuffleAction;
    }
  }
}
class player {
  constructor(name) {
    this.name = name;
    this.playerCards = [];
  }
}
function newGame() {
  let freshDeck = new Deck();
  freshDeck.createDeck();
  freshDeck.shuffleDeck();
  const player1 = new player("player1");
  const player2 = new player("player2");
  player1.playerCards = freshDeck.cards.slice(0, 9);
  player2.playerCards = freshDeck.cards.slice(10, 19);
  console.log(player1.playerCards);
  console.log(player2.playerCards);
}
