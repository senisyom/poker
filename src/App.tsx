import React from 'react'
import { useState } from 'react'
import './App.css'
import CardDeck from './lib/CardDeck'
import CardComponent from './components/CardComponent'; 
import Card from './lib/Card'; 

const App: React.FC = () => {
   
  const [cards, setCards] = useState <Card[]>([]);

  const handleDealCard = () => {
    const deck = new CardDeck()
    deck.CreateDeck();
    const deltCards = deck.getCards(5);
    setCards(deltCards)
  };

  return (
    <div>
      <button onClick={handleDealCard}>Раздать карты</button>
      {cards.length > 0 && (
        <div className="playingCards faceImages">
          {cards.map((card, index) => (
            <CardComponent key={index} rank={card.rank} suit={card.suit} />
          ))}
        </div>
      )}
   </div>
  );
};

export default App;


