import React, { useCallback, useState } from "react";

const MytodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Todo 1", completed: false },
    { id: 2, text: "Todo 2", completed: false },
    { id: 3, text: "Todo 3", completed: false },
    { id: 4, text: "Todo 4", completed: false },
    { id: 5, text: "Todo 5", completed: false },
  ]);
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
  const handleInputChange = useCallback((e) => {
    setInputValue(e.target.value);
  }, []);
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
      <button>Submit</button>
      {todos.map((todo) => (
        <div key={todo.id} style={{ marginBottom: "8px" }}>
          <label htmlFor={`todo-${todo.id}`}>
            <input
              type="checkbox"
              id={`todo-${todo.id}`}
              checked={todo.completed}
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
