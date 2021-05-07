import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./../componentsCss/footerApp.css";

export default class App extends React.Component {
  render() {
    return (
      <div className="footer-app">
          <div className="footer-text">
            Criado por Alessandro Cídney
          </div>
      </div>
    )
  }
}

const container = document.getElementById('footer-app');
ReactDOM.render(<App />, container);