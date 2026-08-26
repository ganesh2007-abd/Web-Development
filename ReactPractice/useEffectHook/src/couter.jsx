import { useState, useEffect } from "react";

export default function Counter() {
    const [count, setcount] = useState(0);
    useEffect(function myEffect() {
        console.log("my effect is called!!")
    })
    const increment = () => {
        setcount((c) => c + 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>+1</button>
        </div>
    )
}