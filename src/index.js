import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from "./App"

const p = React.createElement(
  "p",
  {},
  "Конечно"
);

const elem = React.createElement(
  "h1",
  { className: "element" },
  "Работает?", p
);

// jsx элемент - позволяет на привычном языке писать по логике реакта любой элемент



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);
