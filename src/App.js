import "./App.css";
import React, { useState } from "react";

function App() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState("10%");
  const [split, setSplit] = useState(1);

  function splitMinus() {
    setSplit((oldValue) => {
      if (oldValue === 1) {
        return 1;
      } else {
        return oldValue - 1;
      }
    });
  }
  function splitPlus() {
    setSplit((oldValue) => {
      return oldValue + 1;
    });
  }

  function handleTipChange(e) {
    let value = e.target.value.replace("%", "");
    if (value.indexOf("%") === -1) {
      value = value + "%";
    }
    setTip(value);
  }

  return (
    <div className="App">
      <label>Bill total</label>
      <input
        type="text"
        placeholder={"0.00"}
        value={bill}
        onChange={(e) => setBill(e.target.value)}
      />
      <label>Tip</label>
      <input
        type="text"
        placeholder={"0.00"}
        value={tip}
        onChange={handleTipChange}
      />
      <div className="summary">
        <div className="split">
          <label>Split</label>
          <div className="split-control">
            <button onClick={splitMinus}>-</button>
            <span>{split}</span>
            <button onClick={splitPlus}>+</button>
          </div>
        </div>
        <div className="result">
          <label>Total</label>
          <span>$0.00</span>
        </div>
      </div>
    </div>
  );
}

export default App;
