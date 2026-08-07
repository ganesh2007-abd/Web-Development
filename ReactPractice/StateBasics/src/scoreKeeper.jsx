import { useState } from "react"

export default function ScoreKeeper() {
    console.log("rendered")
    const [scores, setscores] = useState({ p1score: 0, p2score: 0 })

    function incp1() {
        setscores(old => {
            return { ...old, p1score: old.p1score + 1 }
        })
    }

    function incp2() {
        setscores(old => {
            return { ...old, p2score: old.p2score + 1 }
        })
    }

    return (
        <>
            <p>P1 Score:{scores.p1score}</p>
            <p>P1 Score:{scores.p2score}</p>
            <button onClick={incp1}>+P1</button>
            <button onClick={incp2}>+P2</button>
        </>
    )
}