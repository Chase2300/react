import { Message } from "./components/message/message"

export const App = () => {
  /* Андрей, подскажите, зачем сюда передавать константу, если это можно сделать в пределах компонента? Это же захламит в данном случае App.js */
  return (
    <>
      <Message />
    </>
  );
}