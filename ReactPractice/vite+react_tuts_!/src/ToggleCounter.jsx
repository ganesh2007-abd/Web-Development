import { useState } from "react";

export default function TogglerCounter() {
    const [isHappy, setIsHappy] = useState(true)
    const [Count, setCount] = useState(0)
    const toggleisHappy = () => setIsHappy(!isHappy)
    const incrementCount = () => {
        setCount(Count + 1)
    }
    return (
        <div>
            <p onClick={toggleisHappy}>{isHappy ? "😊" : "😔"}</p>
            <p>{Count}</p>
            <button onClick={incrementCount}>+</button>
        </div>
    )

}