function handleClick() {
    console.log("Clicked the Button!")
}


function handleHover() {
    console.log("Hovered over it!")
}
export default function Clicker() {

    return (
        <div>
            <p onMouseOver={handleHover}>Hover over me</p>
            <button onClick={handleClick}>Click</button>
        </div>
    )

}