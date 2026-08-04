export default function ShoppingList({ items }) {
    return (
        <ul>

            {items.map(i => {
                return (
                    <li
                        key={i.id}
                        style={{
                            color: i.completed ? "grey" : "red",
                            textDecoration: i.completed ? "line-through" : "none"
                        }}
                    >
                        {i.item} - {i.quantity}
                    </li>
                );
            })}

        </ul>
    )
}