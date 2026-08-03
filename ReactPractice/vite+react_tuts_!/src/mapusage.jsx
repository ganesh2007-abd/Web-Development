export default function UseMap({ colors }) {

    return (
        <>
            <h1>MapUpsage</h1>
            <ul>
                {colors.map((c) => (
                    <li style={{ color: c }}>{c}</li>
                ))}
            </ul>

        </>
    )
}