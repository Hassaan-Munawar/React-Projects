import './App.css';
import React, { useState } from "react";

function App() {
  const [bgColor, setBgColor] = useState("white");

  const changeBackgroundColor = (color) => {
    setBgColor(color);
  };

  return (
    <div className="container" style={{ backgroundColor: bgColor }}>
      <div className="button-container">
        <button className="color-button" onClick={() => changeBackgroundColor("white")}>
          White
        </button>
        <button className="color-button black" onClick={() => changeBackgroundColor("black")}>
          Black
        </button>
      </div>
    </div>
  );
}

export default App;
