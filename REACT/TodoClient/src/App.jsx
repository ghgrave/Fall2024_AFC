import { useState, useEffect } from "react";
import DeleteForeverTwoToneIcon from "@mui/icons-material/DeleteForeverTwoTone";
import axios from "axios";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const endpoint = `/api/todos`; // leave this as is

  const handleDeleteClick = (e) => {
    console.log("Deleted!!!");
  };

  const handleChange = event => {
    setNewTodo(event.target.value)
    console.log("New todo: ", newTodo);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // const newTodos = [...todos, newTodo]
    // setTodos(newTodos)
    
    axios
      .post()
      .then((results) => {
        console.log("added todo?:", results);
      })
      .catch((err) => console.log("Error adding task: ", err));
      setNewTodo("")
  };

  useEffect(() => {
    axios
      .get(endpoint)
      .then((results) => {
        console.log(results.data);
        setTodos(results.data);
      })
      .catch((err) => console.log("Error: ", err));
  }, []);

  const displayTodos = todos.map((el) => {
    return (
      <li
        key={el.id}
        style={{ textDecoration: el.isCompleted ? "line-through" : "none" }}
      >
        <DeleteForeverTwoToneIcon color="error" onClick={handleDeleteClick} />
        {el.note}
      </li>
    );
  });

  return (
    <>
      <h1>My Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          name="newTodo"
          placeholder="What is my task?"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      <ul>{displayTodos}</ul>
    </>
  );
}

export default App;
