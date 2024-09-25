// Foundation
import { useState } from "react";
import "./App.css";
import {personObj, greeting} from "./helper"

function App() {
  // const [fname, setFname] = useState("JM")
  // const [age, setAge] = useState(50)
  // const [pw, setPw] = useState("")
  
  const [person, setPerson] = useState(personObj);

  return (
    <form action="/getdata" method="get">
      <h1>{greeting}</h1>
      <label>
        First Name:
        <input type="text" name="" id="" />
      </label>
      <label>
        Age:
        <input type="number" name="" id="" />
      </label>
      <label>
        Password:
        <input type="password" name="" id="" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
