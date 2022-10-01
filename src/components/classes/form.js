import React from "react";

export class Form extends React.Component {
    /*         constructor(props) {
                super(props)
        
                this.state = {
                    name: "Privet",
                    count: 0
                };
                this.handleClick = this.handleClick.bind(this)} */


    // либо это можно упростить, написав конструкцию ниже. Это тоже самое
    state = {
        name: "Privet, its state",
        count: 0
    };

    handleClick = () => {
        /* this.setState({ count: this.state.count + 1 })  */// напрямую, как в JS изменить значение this.count = 1 - не получится. Немного другая логика

        this.setState((prevState) => ({ count: prevState.count + 1 })); // если нам нужно сохранять предыдущее значение, то можем использовать промежуточную переменную
        this.setState((prevState) => ({ count: prevState.count + 1 }));
    }

    // state компонента в приложении позволяет передать какие-то дданные, чтобы компонент следил за этими данными и автоматом перерисовывал страницу при их изменении. В классах создается в конструкторе. Super - мы инициализируем все ментоды компонента, от которого мы отошли. В нашем случае - react.component.

    handleChange = (event) => {
        this.setState({ name: event.target.value })
    }
    render() {
        console.log("class component", this.props) // зарезервированный метод props
        return (
            <React.Fragment>
                <div>yo bro, form here // {this.state.name}, {this.state.count}</div>
                <button onClick={this.handleClick}>click</button>
                <p>Name: {this.state.name}</p>
                <p>Name: {this.props.name2}</p>
                <input type="text" onChange={this.handleChange} value={this.state.name} />
            </React.Fragment>)
    } // либо вместо React.Fragment можно просто указать пустые <>
    // bind используется, так как у функции теряется контекст(контекст у функции будет сама функция)
}
 // рендер должен быть обязательно, а также он должен что-то возвращать
 // обращение к стейту идет через this и одинарные ковычки