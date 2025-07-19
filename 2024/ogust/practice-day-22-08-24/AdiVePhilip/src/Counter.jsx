import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    console.log('Counter.jsx is being rendered');
    
    return (
        <button onClick={
            () => setCount(
                (count) => count + 1
            )
        }>
            {` Counter count is ${count}`}
        </button>
    )
}

export default Counter;