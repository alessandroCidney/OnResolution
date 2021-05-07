import React, { Component } from "react";
import ReactDOM from "react-dom";
import  "../componentsCss/headerApp.css";

export default class HeaderApp extends React.Component {
  render() {
    return (
        <div className="header-app">
            <div className="header-text">
                <h1>OnResolution</h1>
            </div>

            <ul className="header-items">
                <li className="header-item">Como utilizar</li>
                <li className="header-item">Sobre nós</li>
            </ul>
        </div>
    )
  }
}

const container = document.getElementById('header-app');
ReactDOM.render(<HeaderApp />, container);