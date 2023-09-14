import './Cart.css';

const Cart = ({selectedActors, reamaining, totalCost}) => {
    console.log(selectedActors);
    
    return (
        <div style={{border: '1px solid yellow', padding:'10px'}}>
        <h5>Total Actors: {selectedActors.length}</h5>
        <h4>Remaing: {reamaining}</h4>
                <h4>total cost: {totalCost}</h4> 
        {
            selectedActors.map(actor => (
                
                <li key={actor.id}>{actor.name}</li>

            ))
        }
        </div>
    );
};

export default Cart;