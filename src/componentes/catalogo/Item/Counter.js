import { useState } from "react";
import './Counter.css'


const Counter = ({init, stock, onAdd}) => {

    const [counter, setCounter] = useState( init );

    //manejadores

    const handleUp = () => {
        if (counter < stock) {
            setCounter( counter + 1);

        }
    }

    const handleDown = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
        
    }

    return (

        <>
        <button onClick={ handleUp }> +</button>
        <button onClick={ handleDown }>-</button>
        <form onSubmit={e => onAdd(e, counter)}>
            
            <input value={counter}/>
            
            <button className="btn btn-secondary" type="submit">Add to Cart</button>
        
        </form>
        </>
    )
}

export default Counter