import Card from "./Card";

class CardDeck {
  private deck: Card[] = [];

  constructor() {
    this.deck = [];
  }

  CreateDeck() {
    const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
    const ranks = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
      "A",
    ];

    for (const suit of suits) {
      for (const rank of ranks) {
        this.deck.push(new Card (rank, suit));
      }
    }
  }
  getDeck() {
    return this.deck;
  }
}

export default CardDeck;

