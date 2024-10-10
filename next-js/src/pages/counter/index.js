import { useState } from "react";

export default function CounterPage(){

const [count, setCount] = useState(0);
  // Don't declare state with a regular variable

function handleClick() {
    
    setCount( count + 1 ); // (count + );
    // alert(`You have ${count} cats.`)
}
return (<div>
    <h1>Lets Count Cats!</h1>
    <div>
    <h3>You have {count} cats.</h3> 
        <button onClick={ handleClick }>
        Click for cats!
        </button>
    </div>
    </div>);

}