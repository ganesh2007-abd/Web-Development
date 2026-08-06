import { useState } from "react"

export default function Counter() {
    const [count, setcount] = useState(0)
    const addone = () => {
        setcount(count + 1)
    }
    const addthree = () => {
        // setcount(count + 1)
        // console.log("triggered")
        // console.log(count);
        // setcount(count + 1)
        // console.log("triggered")
        // console.log(count);
        // setcount(count + 1)
        // console.log("triggered")
        // console.log(count);
        // setcount(count + 3)
        // console.log("triggered")
        // console.log(count);
        setcount(c => c + 1)
        console.log(count)
        setcount(c => c + 1)
        setcount(c => c + 1)
    }
    return (
        <div>
            <p>{count}</p>
            <button onClick={addone}>+1</button>
            <button onClick={addthree}>+3</button>
        </div>
    )
}