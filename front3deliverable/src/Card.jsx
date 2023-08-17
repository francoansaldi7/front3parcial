import './Card.css'

function Card(props){
    const { children } = props
    return (
        <div>
            <h2> Hola {children}! tu juego favorito es:</h2>
            <p>{children}</p>
            <button onClick={props.onDelete}>Borrar juego</button>
        </div>
    )
}

export default Card