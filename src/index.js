import React, { Component, Fragment } from "react";
import { render } from "react-dom";

// Fragment é usado para "abraçar os elementos do JSX. Serve como uma div. Porém ela não é renderizada na tela como uma Div"
class Button extends Component {
  render() {
    return <a href="">Aperte aqui</a>;
  }
}

class App extends Component {
  render() {
    return (
      <Fragment>
        <h1>Hello World Baby</h1>
        <Button />
      </Fragment>
    );
  }
}

render(<App />, document.getElementById("app"));
