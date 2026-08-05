export default function PropertyList({ name, id, rating, price }) {
    return (
        <div className="PropertyList">
            <h1>{name}</h1>
            <h4>{rating}</h4>
            <h5>{price} per night</h5>
        </div>
    )
}