import { useState } from "react";

export default function CounterPage(){

const [count, setCount] = useState(0);
  // Don't declare state with a regular variable
const [number] = useState(1);

function handleClick() {
    
    setCount( count + 2 ); // (count + );
    // alert(`You have ${count} cats.`)
}

function handleIncrement() {
    setCount(count + number);
}

function handleDecrement() {
    if (count - number >= 0) {
    setCount(count - number);
    }
}

function handleReset() {
    setCount(0);
}

return (<div>
    <h1>Lets Count Cats!</h1>
    <div>
    <h3>You have {count} cats.</h3> 

        <button onClick={ handleClick }>
        Click to double cats!
        </button><br />
        
        <button onClick={ handleIncrement }>more =^.^= </button><br />

        <button onClick={ handleDecrement }>less =^.^= </button><br />

        <button onClick={ handleReset }>no =^.^= </button><br />
    </div>
    </div>);

}

