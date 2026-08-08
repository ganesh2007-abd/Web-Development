import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function EmojiClicker() {
    const [emoji, setEmoji] = useState([{ id: uuid(), emoji: ":)" }])
    const addEmoji = () => {
        setEmoji((oldEmojis) => [...oldEmojis, { id: uuid(), emoji: ":)" }])
    }
    return (
        <div>
            {emoji.map((e) => (
                <span key={e.id} style={{ fontSize: "4rem" }}>{e.emoji}</span>
            ))}
            <button onClick={addEmoji}>Add Emoji</button>
        </div>
    )
}