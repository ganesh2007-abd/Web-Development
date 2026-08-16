import { useState } from "react";

export default function SignUpForm() {
    const [firstname, setFirstName] = useState("")
    const [lastname, setlastName] = useState("")

    const UpdateFirst = (evt) => {
        setFirstName(evt.target.value)
    }
    const UpdateLast = (evt) => {
        setlastName(evt.target.value)
    }

    return (
        <div>
            <label htmlFor="FirstName">Enter FirstName:</label>
            <input type="text" id="FirstName" onChange={UpdateFirst} />
            <label htmlFor="FirstName" >Enter LastName:</label>
            <input type="text" id="LastName" onChange={UpdateLast} />
            <button>Submit</button>
        </div>
    )
}