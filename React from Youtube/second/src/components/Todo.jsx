import { useState } from "react";
import "../index.css";

function Todo() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  function handleSubmit() {
    setData((todo) =>
      todo.concat({
        text: input,
        id: Math.floor(Math.random() * 100),
      })
    );
    setInput(" ");
  }

  function handleRemove(id) {
    setData((todo) => todo.filter((t) => t.id !== id));
  }

  return (
    <div className="container">
      <input
        type="text"
        placeholder="todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSubmit}>submit</button>
      <ul className="todo-list">
        {data.map(({ text, id }) => (
          <li className="todo" key={id}>
            <span>{text}</span>
            <button className="close" onClick={() => handleRemove(id)}>
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
