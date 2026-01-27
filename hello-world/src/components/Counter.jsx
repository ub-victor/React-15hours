import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    return ( 
        <div>
            {/* setCount(prevCount => prevCount + 1); */}
            <button onClick={()=>setCount(count +1)}>{count}</button>
        </div>
     );
}

export default Counter;