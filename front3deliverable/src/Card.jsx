import './Card.css'

function Card(props){
    // eslint-disable-next-line no-unused-vars
    const { nombre, juego } = props
    return (
        <div>
            <h2> Hola {props.nombre}!</h2>
            <p>Tu juego favorito es:</p>
            <h3>{props.juego}</h3>
            <button onClick={props.onDelete}>Borrar juego</button>
        </div>
    )
}

export default Card