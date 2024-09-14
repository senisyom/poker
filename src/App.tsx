import React from 'react'
import { useState } from 'react'
import './App.css'
import CardDeck from './lib/CardDeck'
import Card from './components/CardComponent'


 const App: React.FC = () => {
  return (
    <div>
      <h1>Video Poker</h1>
      <Card rank="K" suit="diams" />
      <Card rank="A" suit="hearts" />
      <Card rank="10" suit="clubs" />
      <Card rank="7" suit="spades" />
    </div>
  );
};

export default App;


