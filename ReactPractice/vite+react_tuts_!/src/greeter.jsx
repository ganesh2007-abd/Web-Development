export default function Greeter({ name = "everyone", from = "anonymous" }) {
    return (
        <>
            <h1>Hello There,{name}</h1>
            <p>-- {from}</p>
        </>
    )
}