import React from "react";
import "./App.css";
import SampleComponent from "shared/dist/index";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>client</div>
        <SampleComponent />
      </header>
    </div>
  );
}

export default App;
