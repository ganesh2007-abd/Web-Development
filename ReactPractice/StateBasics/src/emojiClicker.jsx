import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function EmojiClicker() {
    const [emoji, setEmoji] = useState([{ id: uuid(), emoji: ":)" }])
    const addEmoji = () => {
        setEmoji((oldEmojis) => [...oldEmojis, { id: uuid(), emoji: ":)" }])
    }
    const deleteEmoji = (id) => {
        setEmoji(prevEmojis => {
            return prevEmojis.filter(e => e.id !== id)
        })
    }
    return (
        <div>
            {emoji.map((e) => (
                <span onClick={() => { deleteEmoji(e.id) }} key={e.id} style={{ fontSize: "4rem" }}>{e.emoji}</span>
            ))}
            <button onClick={addEmoji}>Add Emoji</button>
        </div>
    )
}