import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(2);

    return ( 
        <div>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>
                {count}
            </button>
        </div>
    );
}

export default Counter;
