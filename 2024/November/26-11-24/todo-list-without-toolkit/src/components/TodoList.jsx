import React, { useState } from "react";
import {
  addTodo,
  toggleTodo,
  deleteTodo,
} from "../store/actions/TodosActions.js";
import { useDispatch, useSelector } from "react-redux";

function TodoList() {
  const todos = useSelector((state) => state.todos);
  
  const [newTodo, setNewTodo] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    dispatch(addTodo(newTodo));
    setNewTodo("");
  };

  return (
    <div>
      <h2>To-Do List</h2>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={handleAddTodo}>Add</button>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((todo) => (
          <li key={todo.id} style={{ margin: "10px 0" }}>
            <span
              onClick={() => dispatch(toggleTodo(todo.id))}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer",
              }}
            >
              {todo.text}
            </span>
            <button
              onClick={() => dispatch(deleteTodo(todo.id))}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
