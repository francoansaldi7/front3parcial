import { useState } from 'react'
import './App.css'
import Form from './Form'
import Card from './Card'

function App() {
  const [card, setCard] = useState()

  function handleSubmit(nombre, juego){
    setCard(({nombre: nombre, juego: juego}));
  }

  function handleDelete(){
    setCard();
  }

  return (
    <>
      <Form onOrder={handleSubmit} />
      {card ? <Card onDelete={handleDelete} nombre = {card.nombre} juego ={card.juego}></Card> : undefined}
    </>
  )
}

export default App
