import { useState } from "react";

// import './App.css'

function App() {
  const initPerson = {
    fname: "",
    lname: "",
    age: 21
  }

  const [personData, setPersonData] = useState(initPerson);

  const handleChange = (event) => {
    // spread operator
    // takes current obect data, preserves it and if updates needed
    // replaces current key with new value
    // based on user input target
    setPersonData({ ...personData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Sending data: ", personData);
    setPersonData(initPerson)
  };

  return (
    <>
      {/* submission of form */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="fname">
          First Name:
          <input
            type="text"
            name="fname"
            id="fname"
            value={personData.fname}
            onChange={handleChange}
            maxLength={5}
            required
            minLength={3}
          />
        </label>
        <br />
        <label htmlFor="lname">
          Last Name:
          <input
            type="text"
            name="lname"
            id="lname"
            value={personData.lname}
            onChange={handleChange}
            
            maxLength={5}
            autoComplete="off"
          />
        </label>
        <br />
        <label htmlFor="age">
          Age:
          <input
            type="number"
            name="age"
            id="age"
            value={personData.age}
            min={21}
            max={99}
            onChange={handleChange}
          />
        </label>
        <br />
        <button>Submit</button>
      </form>
    </>
  );
}

export default App;
