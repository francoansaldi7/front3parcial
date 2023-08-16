import { useState } from 'react'
import './App.css'
import Form from './Form'
import Order from './Order'

function App() {
  const [theOrder, setTheOrder] = useState()

  function handleSubmit(order){
    setTheOrder(order);
  }

  function handleDelete(){
    setTheOrder();
  }

  return (
    <>
      <Form onOrder={handleSubmit} />
      {theOrder ? <Order onDelete={handleDelete}>{theOrder}</Order> : undefined}
    </>
  )
}

export default App
