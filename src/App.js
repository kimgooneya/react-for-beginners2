import { useState } from "react";

function App() {
  const [toDo, setTodo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos(currentArray => [toDo, ...currentArray]);
    setTodo("");
  }
  console.log(toDos);
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <input
        onChange={onChange}
        value={toDo}
        type="text"
        placeholder="Write your to do..." />
      <button onClick={onSubmit}>Add To do</button>
    </div>

  );
}

export default App;