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

    this.deck = [];

    for (const suit of suits) {
      for (const rank of ranks) {
        this.deck.push(new Card(rank, suit));
      }
    }
  }

  getDeck() {
    return this.deck;
  }

  getCard(): Card | undefined {
    return this.deck.length > 0
      ? this.deck.splice(Math.floor(Math.random() * this.deck.length), 1)[0]
      : undefined;
  }

  getCards(howMany: number): Card[] {
    const cards: Card[] = [];
    for (let i = 0; i < howMany; i++) {
      const card = this.getCard();
      if (card) {
        cards.push(card);
      } else {
        break;
      }
    }
    return cards;
  }
  

  getNewDeck() {
    this.CreateDeck();
  }
}

export default CardDeck;

