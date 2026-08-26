import { useState, useEffect } from "react";

export default function Counter() {
    const [count, setcount] = useState(0);
    const [name, setname] = useState("")
    useEffect(function myEffect() {
        console.log("my effect is called!!")
    }, [count])

    const increment = () => {
        setcount((c) => c + 1)
    }

    const handleChange = (e) => {
        setname(e.target.value)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>+1</button>
            <p>{name}</p>
            <input value={name} onChange={handleChange} type="text" />
        </div>
    )
}