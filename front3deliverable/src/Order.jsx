import './Order.css'

function Order(props){
    const { children } = props
    return (
        <div>
            <h2>Your order is:</h2>
            <p>{children}</p>
            <button onClick={props.onDelete}>Delete Order</button>
        </div>
    )
}

export default Order