import { useState } from "react";

export default function StateTut() {
    const [Num, setNum] = useState(5)
    const changeNum = () => {
        setNum(Num + 1)
    }
    return (
        <div>
            <p>Hello bruhh</p>
            <p>Num is {Num}</p>
            <button onClick={changeNum}>Increment</button>
        </div>
    )
}