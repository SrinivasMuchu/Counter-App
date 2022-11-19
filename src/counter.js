import React from 'react';
import { useState } from 'react';
function CounterPage() {
    let [countNum, setCount] = useState(0);
    let increaseValaue = () => {
    setCount((countNum += 1)); //increases the count by 1
    };
    let decreaseValue = () => {
    if (countNum === 0) {
    alert("no negative numbers counted");
    } else {
    setCount((countNum -= 1)); 
    }
    };// decreases the count by 1
    let resetValue = () => {
    setCount(0); //resets the count to 0
    };
return (
<div>
<h1> {countNum} </h1>
<button onClick={increaseValaue} className="Incre">Increment</button>
<button onClick={decreaseValue} className="decre">Decrement</button>
<button onClick={resetValue} className="reset">Reset</button>
</div>
)
}
export default CounterPage