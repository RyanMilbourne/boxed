import { useState } from "react";
import "./App.css";
import BoxHome from "./components/Box/BoxHome";
import Results from "./components/Results/Results";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-container">
      <div className="app-wrapper">
        <div className="app-title">
          <h1>boxed</h1>
        </div>
        <div className="app-description">
          <p>a playful way to visualize box-shadows</p>
        </div>
        <BoxHome />
        <Results />
      </div>
    </div>
  );
}

export default App;
