import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardDeck from './lib/CardDeck'

const App = () => {
  const [count, setCount] = useState(0)

  const suitOBJ = {
    diams: '♦',
  }

  const cardDeck = new CardDeck()
  console.log(cardDeck.deck);
  

  return (
    <span className="card rank-k diams">
    <span className="rank">K</span>
    <span className="suit">♦</span>
</span>
  )
}

export default App
