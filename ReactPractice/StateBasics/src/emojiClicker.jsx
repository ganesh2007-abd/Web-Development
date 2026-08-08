import { useState } from "react";

export default function EmojiClicker() {
    const [emoji, setEmoji] = useState([":)"])
    const addEmoji = () => {
        setEmoji((oldEmojis) => [...oldEmojis, ":)"])
    }
    return (
        <div>
            {emoji.map((e) => (
                <span style={{ fontSize: "4rem" }}>{e}</span>
            ))}
            <button onClick={addEmoji}>Add Emoji</button>
        </div>
    )
}