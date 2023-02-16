import React from "react";

import logo from "./logo.svg";
import TicTacToeGame from "./components/Game";
import "./App.css";

function App() {
  return (
    <div className="App">
      <figure className="App-logo">
        <img src={logo} alt="React" />
      </figure>
      <TicTacToeGame />
    </div>
  );
}

export default App;
