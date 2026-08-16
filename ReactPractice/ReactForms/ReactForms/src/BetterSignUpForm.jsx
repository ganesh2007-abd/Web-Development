import { useState } from "react";

export default function BetterSignUpForm() {
    const [user, setuser] = useState({
        FirstName: "",
        LastName: ""
    })

    const handleChange = (evt) => {
        const field = evt.target.name
        const newval = evt.target.value

        setuser(values => ({ ...values, [field]: newval }))

    }

    const handlesubmit = () => {
        console.log(user)
    }

    return (
        <div>
            <label htmlFor="FirstName">Enter FirstName:</label>
            <input type="text" id="FirstName" onChange={handleChange} name="FirstName" />
            <label htmlFor="FirstName" >Enter LastName:</label>
            <input type="text" id="LastName" onChange={handleChange} name="LastName" />
            <button onClick={handlesubmit}>Submit</button>
        </div>
    )
}