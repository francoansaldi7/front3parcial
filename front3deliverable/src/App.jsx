import { useState } from 'react'
import './App.css'
import Form from './Form'
import Card from './Card'

function App() {
  const [card, setCard] = useState()

  function handleSubmit(card){
    setCard(card);
  }

  function handleDelete(){
    setCard();
  }

  return (
    <>
      <Form onOrder={handleSubmit} />
      {card ? <Card onDelete={handleDelete}>{card}</Card> : undefined}
    </>
  )
}

export default App
