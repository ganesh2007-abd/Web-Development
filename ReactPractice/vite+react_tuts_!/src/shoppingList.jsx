import { ShoppingListItem } from "./ShoppingListItem";

export default function ShoppingList({ items }) {
    return (
        <ul>
            {items.map(i => {
                return (
                    <ShoppingListItem key={i.id} {...i} />
                );
            })}
        </ul>
    )
}

// style = {{
//     color: i.completed ? "grey" : "red",
//         textDecoration: i.completed ? "line-through" : "none"
// }}