const FunctionClick = () => {
    function clickHandler(){
        console.log('Button clicked');
    }
    return ( 
        <button onClick={()=> clickHandler()}>Click</button>
     ); 
}
 
export default FunctionClick;