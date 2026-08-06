export default function ClickerExe({ msg }) {
    const triggerAlert = () => {
        alert(msg)
    }
    return (
        <button onClick={triggerAlert}>Click me</button>
    )
}