import React from 'react'
import '../cards.css'


interface Props {
  rank: string;
  suit: string;
}

  const CardComponent: React.FC<Props> = ({ rank, suit }) => {
  const suitSymbols: { [key: string]: string } = {
    diams: '♦',
    hearts: '♥',
    clubs: '♣',
    spades: '♠',
  };
   const suitCard = suitSymbols[suit];

  return (
    <span className={`card rank-${rank} ${suit}`}>
      <span className="rank">{rank}</span>
      <span className="suit">{suitCard}</span>
    </span>
  );
};

export default CardComponent;
