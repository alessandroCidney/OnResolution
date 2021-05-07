import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../componentsCss/mainApp.css";

import ImgRegua from "./../../resources/ImgRegua.png";

export default class MainApp extends React.Component {
  render() {

    const FindResolution = () => {
        const screenWidth = screen.width;
        const screenHeight = screen.height;
    
        return (
            <div className="div-result">

                <div className="result-img">
                    <img className="result-regua" src={ImgRegua} />
                </div>

                <div className="text-result">
                    A resolução da sua tela vale
                </div>

                <div className="result">
                    {`${screenWidth} x ${screenHeight}`}
                </div>
            </div>
        )
    }

    return (
        <div className="main-app">
            {<FindResolution />}
        </div>
    )
  }
}

const container = document.getElementById('main-app');
ReactDOM.render(<MainApp />, container);