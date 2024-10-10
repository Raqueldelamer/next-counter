import { useState } from "react";


export default function CounterPage(){

const [count, setCount] = useState(0);
  // Don't declare state with a regular variable
  // let count = 10; 

  // This should increment count by 1
function handleClick() {
    // count++;
    setCount( count + 1 );
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