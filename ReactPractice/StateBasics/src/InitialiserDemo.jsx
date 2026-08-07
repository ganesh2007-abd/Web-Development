import { useState } from "react";

function initialiser() {
    console.log("Triggered the initialiser")
    return Array(5000);
}

export default function InitialiserDemo() {
    const [gameboard, setgameboard] = useState(initialiser)
    return (
        <button onClick={() => setgameboard("Ganesh")}>
            Click me to change the state!
        </button>
    )
}