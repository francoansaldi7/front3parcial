import { useState } from "react"
import './Form.css'

function Form(props){

    const [nombre, setNombre] = useState('')
    const [juego, setJuego] = useState('')
    const [message, setMessage] = useState(false)

    function validationRules(event){
        event.preventDefault()
        if(nombre.length <= 3 || nombre.trim()[0] === ''){
            setMessage('Por favor ingresa un nombre válido (mínimo 3 caracteres y sin espacios al principio)')
        } else if (juego.trim() === '' || juego.length < 6) {
            setMessage('Por favor ingresa un juego válido (mínimo 6 caracteres)')
        } else{
            props.onOrder(nombre, juego)
            setMessage('')
        }  
    }

    return (
        <form onSubmit={validationRules}>
            <label htmlFor="nombre">¿Cuál es tu nombre?</label>
            <input 
            type="text" 
            id="nombre"
            placeholder="inserta tu nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            />

            <label htmlFor="juego">¿Cuál es tu video juego favorito?</label>
            <input 
            type="text" 
            id="juego"
            placeholder="inserta tu videojuego favorito"
            value={juego}
            onChange={(e) => setJuego(e.target.value)}
            />
            {message ? <div>{message}</div> : null}
            <button className="formButton" type="submit">Enviar</button>
        </form>
    )
}

export default Form