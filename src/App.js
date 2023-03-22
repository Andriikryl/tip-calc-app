import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState("10%");
  const [split, setSplit] = useState(1);
  const [splitTotal, setSplitTotal] = useState(0);

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

  function handleBillChange(e) {
    setBill(e.target.value);
  }

  function handleTipChange(e) {
    let value = e.target.value.replace("%", "");
    if (value.indexOf("%") === -1) {
      value = value + "%";
    }
    setTip(value);
  }

  function calculate() {
    const percentage = 1 + parseInt(tip.replace("%", "")) / 100;
    const result = ((bill * percentage) / split).toFixed(2);
    setSplitTotal(result);
  }

  useEffect(() => {
    calculate();
  }, [bill, tip, split]);

  return (
    <div className="App">
      <label>Bill total</label>
      <input
        type="text"
        placeholder={"0.00"}
        value={bill}
        onChange={(e) => {
          handleBillChange(e);
        }}
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
          <span>{splitTotal}</span>
        </div>
      </div>
    </div>
  );
}

export default App;
