import Card from "./Card";

export default class PokerHand {
  private hand: Card[];

  constructor(hand: Card[]) {
    this.hand = hand;
  }

  private getRankCounts(): Map<string, number> {
    const rankCounts = new Map<string, number>();
    this.hand.forEach((card) => {
      const count = rankCounts.get(card.rank) || 0;
      rankCounts.set(card.rank, count + 1);
    });
    return rankCounts;
  }

  private getSuits(): string[] {
    return this.hand.map((card) => card.suit);
  }

  private isFlush(): boolean {
    const suits = this.getSuits();
    return suits.every((suit) => suit === suits[0]);
  }

  private isStraight(): boolean {
    const ranks = this.hand
      .map((card) => {
        if (card.rank === "A") return 14;
        if (card.rank === "K") return 13;
        if (card.rank === "Q") return 12;
        if (card.rank === "J") return 11;
        return parseInt(card.rank);
      })
      .sort((a, b) => a - b);

    const uniqueRanks = Array.from(new Set(ranks));
    if (uniqueRanks.length !== 5) return false;

    // Check for the special case of A-2-3-4-5
    if (
      uniqueRanks[0] === 2 &&
      uniqueRanks[4] === 14 &&
      uniqueRanks[1] === 3 &&
      uniqueRanks[2] === 4 &&
      uniqueRanks[3] === 5
    ) {
      return true;
    }

    return uniqueRanks[4] - uniqueRanks[0] === 4;
  }

  public getOutcome(): string {
    const rankCounts = this.getRankCounts();
    const counts = Array.from(rankCounts.values()).sort((a, b) => b - a);

    if (this.isFlush() && this.isStraight()) {
      return "Стрит-флэш";
    }

    if (counts[0] === 4) {
      return "Каре";
    }

    if (counts[0] === 3 && counts[1] === 2) {
      return "Фулл-хаус";
    }

    if (this.isFlush()) {
      return "Флэш";
    }

    if (this.isStraight()) {
      return "Стрит";
    }

    if (counts[0] === 3) {
      return "Тройка";
    }

    if (counts[0] === 2 && counts[1] === 2) {
      return "Две пары";
    }

    if (counts[0] === 2) {
      return "Одна пара";
    }

    return "Старшая карта";
  }
}
