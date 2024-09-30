import { useState } from "react";
import { randNumberGenerator } from "./utilities/helper";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [isSeven, setIsSeven] = useState(false);
  // const [isVisible, setIsVisible] = useState(true);
  const handleClick = () => {
    const randomNumber = randNumberGenerator();
    setCount(randomNumber);
    setIsSeven(randomNumber === 7);
  };

  return (
    <>
      <h1>Welcome to Valhalla Casino</h1>
      <h2>{count}</h2>
      {/* DELETE: Devante remove once it works */}
      {/* TODO: Luis, need to add a random function here */}
      <button
        style={{visibility: !isSeven ? "visible" : "hidden"}}
        onClick={handleClick}
      >
        Click me to Win!!
      </button>
      {isSeven && <h1>You Win!!!</h1>}
    </>
  );
}

export default App;
