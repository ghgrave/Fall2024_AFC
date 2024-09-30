import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const TodoItem = ({ text }) => {
    return <li>{text}</li>;
  };

  const handleChange = event => {
    setNewTodo(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
    setNewTodo("")
    console.log(todos)
  }

  return (
    <>
      <h1>Simple Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          name="newTodo"
          placeholder="What is my task?"
          onChange={handleChange}
        />
        <button type="submit">SAVE</button>
      </form>
      <div>
        <ol>

        </ol>
      </div>
    </>
  );
}

export default App;
