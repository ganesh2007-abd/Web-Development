import { useState } from "react";

export default function UserName() {
    const [input, setinput] = useState("")
    const updater = (evt) => {
        setinput(evt.target.value)
    }
    return (
        <div>
            <label htmlFor="Username">Enter Username</label>
            <input type="text" value={input} onChange={updater} id="Username" />
            <button>Submit</button>
        </div>
    )
}