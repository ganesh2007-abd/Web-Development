function handleClick() {
    console.log("Clicked the Button!")
}

export default function Clicker() {

    return (
        <div>
            <button onClick={handleClick}>Click</button>
        </div>
    )

}