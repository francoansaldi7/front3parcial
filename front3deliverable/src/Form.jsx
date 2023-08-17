import { useState } from "react"
import './Form.css'

function Form(props){

    const [nombre, setNombre] = useState('')
    const [juego, setJuego] = useState('')
    const [message, setMessage] = useState(false)

    function validationRules(event){
        event.preventDefault()
        if(nombre.trim() !== ''){
            props.onOrder(nombre)
            setMessage('')
        } else {
            setMessage('Por favor chequea que la información sea correcta')
        }
    }

    return (
        <form onSubmit={validationRules}>
            <label className="card" htmlFor="nombre">¿Cuál es tu nombre?</label>
            <input 
            type="text" 
            id="nombre"
            placeholder="inserta tu nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            />

            <label className="card" htmlFor="juego">¿Cuál es tu video juego favorito?</label>
            <input 
            type="text" 
            id="juego"
            placeholder="inserta tu videojuego favorito"
            value={juego}
            onChange={(e) => setJuego(e.target.value)}
            />
            {message ? <div>{message}</div> : null}
            <button type="submit">Enviar</button>
        </form>
    )
}

export default Form