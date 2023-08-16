import { useState } from "react"
import './Form.css'

function Form(props){

    const [order, setOrder] = useState('')
    const [message, setMessage] = useState(false)

    function validationRules(event){
        event.preventDefault()
        if(order.trim() !== ''){
            props.onOrder(order)
            setMessage('')
        } else {
            setMessage('An error ocurred')
        }
        
    }

    return (
        <form onSubmit={validationRules}>
            <label htmlFor="order">What would you like to order?</label>
            <input 
            type="text" 
            id="order"
            value={order}
            onChange={(e) => setOrder(e.target.value)}
            />
            {message ? <div>{message}</div> : null}
            <button type="submit">Submit</button>
        </form>
    )
}

export default Form