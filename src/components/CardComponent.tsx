import React from 'react'
import '../cards.css'


interface CardProps {
  rank: string;
  suit: string;
}

  const CardComponent: React.FC<CardProps> = ({ rank, suit }) => {
  const suitSymbols: { [key: string]: string } = {
    diams: '♦',
    hearts: '♥',
    clubs: '♣',
    spades: '♠',
  };
   const suitSymbol = suitSymbols[suit] || '';

  return (
    <span className={`card rank-${rank} ${suit}`}>
      <span className="rank">{rank}</span>
      <span className="suit">{suitSymbol}</span>
    </span>
  );
};

export default CardComponent;
