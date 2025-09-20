import React, { useCallback, useState } from "react";

const MytodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleChecked = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (id) => {
    setTodos((prev) => prev?.filter((todo) => todo.id !== id));
  };

  const totalCompleted = todos.filter((todo) => todo.completed).length;
  const handleInputChange = useCallback(
    (e) => {
      console.log(e.target.value)
      setInputValue(e.target.value);
    },
    [inputValue]
  );

  const handlesubmit = useCallback(() => {
    setTodos((prev) => [
      ...prev,
      { id: todos.length, text: inputValue, completed: false },
    ]);
  }, [todos,inputValue]);

  return (
    <div>
      <div>My todolist</div>
      <div>Total Completed: {totalCompleted}</div>
      <div>Total List: {todos.length}</div>

      <div>All Lists</div>

      <input
        type="text"
        value={inputValue}
        onChange={(e) => handleInputChange(e)}
      />
      <button onClick={() => handlesubmit()}>Submit</button>
      {todos.map((todo) => (
        <div key={todo.id} style={{ marginBottom: "8px" }}>
          <label htmlFor={`todo-${todo?.id}`}>
            <input
              type="checkbox"
              id={`todo-${todo?.id}`}
              checked={todo?.completed}
              onChange={() => handleChecked(todo?.id)}
            />
            {todo.text}
          </label>
          <button
            onClick={() => handleDelete(todo?.id)}
            style={{ marginLeft: "10px" }}
          >
            delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default MytodoList;
