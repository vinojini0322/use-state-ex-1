import { useState } from "react";
import "./App.css";

function App() {
  const [clicked, isClicked] = useState(false);
  return (
    <div className="App">
      <button onClick={() => isClicked(!clicked)}></button>
      {clicked && <p>Show text</p>}
    </div>
  );
}

export default App;
