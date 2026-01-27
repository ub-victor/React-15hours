import { useState } from "react";
const Message = (props) => {
    return (
        
        <>
        <h1>Welcome Visitor</h1>
        {props.children}
        </>
                
     );
}
 
export default Message;  