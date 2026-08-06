import { useState } from "react";

export default function Toggler() {
    const [isHappy, setIsHappy] = useState(true)
    const toggleisHappy = () => setIsHappy(!isHappy)
    return (
        <div>
            <p onClick={toggleisHappy}>{isHappy ? "😊" : "😔"}</p>
        </div>
    )

}