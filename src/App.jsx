import { useState } from "react";
import "./App.css";
import BoxHome from "./components/Box/BoxHome";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-container">
      <div className="app-wrapper">
        <div className="app-title">
          <h1>Boxed</h1>
        </div>
        <div className="app-description">
          <p>A way to visualize box-shadows</p>
        </div>
        <BoxHome />
      </div>
    </div>
  );
}

export default App;
