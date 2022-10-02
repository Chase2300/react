import { useState } from "react"
import style from "./message.module.css"

export const Message = () => {
    const [text, setText] = useState("")
    const handleChange = (e) => {
        setText(e.target.value)
        displayBorder()
    }
    const displayBorder = () => {
        const span = document.querySelector("span")
        const input = document.querySelector("input")
        input.value.length ? span.className = style.border : span.className = style.border_none
    }

    return (
        <>
            <p>
                Your text will be written here &#8594; <span className={""}>{text}</span>
            </p>
            <input type="text" onChange={handleChange} placeholder="Write something">
            </input>
        </>
    )
}