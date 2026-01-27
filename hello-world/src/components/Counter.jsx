import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    return ( 
        <div>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
            <h1>Counter = {count} </h1>
            <button onClick={() => setCount(nextCount => nextCount + 1)}>Increment</button>

        </div>
    );
}

export default Counter;
