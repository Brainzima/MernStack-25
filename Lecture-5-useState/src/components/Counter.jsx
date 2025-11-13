import { useState } from "react"

function Counter(){
    const [count, setCount] = useState(0)
    function handleClick(){
        setCount(count + 1)
    }
    return (
        <>
        <h4>Counter : {count}</h4>

        <button onClick={handleClick}>Click Me to Increase</button>
        </>
    )
}

export default Counter