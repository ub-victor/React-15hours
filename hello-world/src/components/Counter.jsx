import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    return ( 
        <div>
            <button onClick={()=>setCount((count)=>count++)}>{count}</button>
        </div>

     );
}
 
export default Counter;