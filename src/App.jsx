import { useState } from "react";
import "./App.css";
import BoxHome from "./components/Box/BoxHome";
import Results from "./components/Results/Results";
import Navbar from "./components/Nav/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="main-container">
      <Navbar />
      <div className="app-container">
        <div className="app-wrapper">
          <BoxHome />
          <Results />
        </div>
      </div>
    </div>
  );
}

export default App;
