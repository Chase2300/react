import { useState } from "react";
import { Form } from "./components/classes/form"
import { Form as FormFunc } from "./components/func/form"
import "./index.css" // подключаем css стили

export const App = () => {
  const [toggle, setToggle] = useState(true);
  const [arr, setArr] = useState([1, 2, 3, 4, 5, 6]); //отрисовка элементов массива
  return (

    <>
      <Form arr={arr} name2="nameFromProps" /> {/* можно закидывать различные элементы в компонент и потом обращаться к ним */}
      <hr />
      <button onClick={() => setToggle(!toggle)}>{toggle ? "hide" : "show"}</button> {/* можно сразу передавать функцию вовнутрь  */}
      {toggle && <FormFunc name="react" />} {/* {используется как условие в JS, например true && 2 -> получим 2 и если false && 2 -> получим false} */}
      <ul className="header"> {/* подключение стилей выглядит вот так вот */}
        {arr.map(item => <li>{item}</li>)} {/* отрисовка массива через метод map, куда передаем элемент и выводим его через элемент li, например */}
      </ul>
    </>
  );
}