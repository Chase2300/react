import { useState } from "react" // возвращает 2 элемента. 1 - текущее состояние стейта, 2 - функция, которая меняет значение нашего стейта

import style from "./form.module.css"

export const Form = (props) => {
    const [count, setCount] = useState(0); // указывается массив, в котором будет свойство, функция, а также это будет все ловится хуком с дефолтным значением 0.
    const [name, setName] = useState("Artem");
    const handleClick = () => {
        setCount(count + 1)
    }
    const handleChange = (e) => {
        setName(e.target.value)
    }
    return (
        <>
            <p className={style.background}> Yo, form #2 - {count}</p> {/* модульный импорт */}
            <button onClick={handleClick}>click</button> {/* this не нужен, так как мы обращаемся просто к переменной */}
            <p>Name: {props.name}</p> {/* в функциональный компонент передаем переменную со значением, потом выше в функцию первым аргументов передаем это значение и потом используеем тут, например */}
            <p style={{ backgroundColor: "green" }}>Name: {name}</p> {/* инлайн стили */}
            <input type="text" onChange={handleChange} value={name} />
        </>
    )
}