export default class Card {
  rank: string;
  suit: string;

  constructor(rank: string, suit: string) {
    this.rank = rank;
    this.suit = suit;
  }
  render(): string {
    const suitObj: { [key: string]: string } = {
      diams: "♦",
      hearts: "♥",
      clubs: "♣",
      spades: "♠",
    };

    return `<span class="card rank-${this.rank} diams">
                 <span class="rank">${this.rank}</span>
                 <span class="suit">${suitObj[this.suit]}</span>
                </span>`;
  }
}
