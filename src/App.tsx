import React from 'react'
import { useState } from 'react'
import './App.css'
import PokerHand from './lib/Hand'
import CardDeck from './lib/CardDeck'
import CardComponent from './components/CardComponent'; 
import Card from './lib/Card'; 

const App: React.FC = () => {
   
  const [cards, setCards] = useState<Card[]>([]);
  const [handOut, setHandOut] = useState<string>('');

  const dropCard = () => {
    const deck = new CardDeck()
    deck.CreateDeck();
    const deltCards = deck.getCards(5);
    setCards(deltCards)

    const pokerHand = new PokerHand(deltCards);
    setHandOut(pokerHand.getOutcome());
  };

  return (
    <div>
      <button onClick={dropCard}>Раздать карты</button>
      {cards.length > 0 && (
        <div className="playingCards faceImages">
          {cards.map((card, index) => (
            <CardComponent key={index} rank={card.rank} suit={card.suit} />
          ))}
        </div>
      )}
      {handOut && <div>Комбинация: {handOut}</div>}
   </div>
  );
};

export default App;


