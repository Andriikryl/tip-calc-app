import "./App.css";

function App() {
  return (
    <div className="App">
      <label>Bill total</label>
      <input type="text" placeholder={"0.00"} />
      <label>Tip</label>
      <input type="text" placeholder={"0.00"} />
      <div className="summary">
        <div className="split">
          <label>Split</label>
          <div className="split-control">
            <button>-</button>
            <span>1</span>
            <button>+</button>
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
