import React, { Component } from "react";
import ReactDOM from "react-dom";
import  "../componentsCss/sectionOneApp.css";
import Laptop from "./../../resources/Laptop.png";

export default class SectionOneApp extends React.Component {
  render() {
    return (
        <div className="section-one-app">
            <div className="section-one-image-laptop">
                <img src={Laptop} alt="Imagem de Laptop" className="image-laptop" />
            </div>

            <div className="section-one-text">
                Obtenha o valor da resolução de sua tela instantaneamente.
            </div>
        </div>
    )
  }
}

const container = document.getElementById('section-one-app');
ReactDOM.render(<SectionOneApp />, container);