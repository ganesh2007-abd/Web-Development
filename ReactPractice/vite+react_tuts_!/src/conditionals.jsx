export default function Conditionals() {
    const num1 = Math.floor(Math.random() * 3) + 1;
    const num2 = Math.floor(Math.random() * 3) + 1;
    const styles = { color: num1 === num2 ? "green" : "red" }
    return (
        <div style={styles}>
            {num1 === num2 ? <h1>You Win</h1> : <h1>You lose:(</h1>}
            <p>{num1}</p>
            <p>{num2}</p>

        </div>
    )
}