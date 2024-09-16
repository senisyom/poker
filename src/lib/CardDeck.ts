import Card from "./Card";

class CardDeck {
  private deck: Card[] = [];

  constructor() {
    this.deck = [];
  }

  CreateDeck() {
    const suits = ["hearts", "diamonds", "clubs", "spades"];
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

  getCard(): Card | undefined {
    return this.deck.length > 0?this.deck.splice(Math.floor(Math.random() * this.deck.length), 1)[0]: undefined;
  }
  getDeck() {
    return this.deck;
  }

  

  getCards(amount: number): Card[] {
    const cards: Card[] = [];
    for (let i = 0; i < amount; i++) {
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

