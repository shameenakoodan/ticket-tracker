import './Counter.scss';
import { useState } from "react";
const Counter = ()=>{
    const [counter,setCounter] = useState(0);
    const handleIncrement = ()=>{
        setCounter(counter +1);
    }
    const handleDecrement = ()=>{
        if(counter === 0)
            setCounter(0);
        else
            setCounter(counter -1);

    }
    return (
        <div className='counter-box'>
            <label className = "counter">Counter</label>
            <div>
                <button onClick = {handleIncrement}>+</button>
                    {counter}
                <button onClick = {handleDecrement}>-</button>
            </div>
        </div>
    )
}
export default Counter;