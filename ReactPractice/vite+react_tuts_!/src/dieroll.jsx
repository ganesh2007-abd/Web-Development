export default function DieRoll({ numSides = 6 }) {
    const roll = Math.floor(Math.random() * numSides) + 1
    return (
        <>
            <h1>Die roll for {numSides} sided : {roll}</h1>

        </>
    )
}