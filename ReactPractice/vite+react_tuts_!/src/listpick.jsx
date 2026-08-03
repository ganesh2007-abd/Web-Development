export default function ListPicker({ values }) {
    const randIdx = Math.floor(Math.random() * values.length)
    const randele = values[randIdx]
    return (
        <>
            <h1>Random numer is : {randele}</h1>

        </>
    )
}