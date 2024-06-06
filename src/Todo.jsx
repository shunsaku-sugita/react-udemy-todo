import { useState } from "react";
import "./style.css";

export const Todo = () => {
  const [todoText, setTodoText] = useState("aaa");
  const [incompleteTodos, setIncompleteTodos] = useState(["TODO1", "TODO2"]);
  const [completeTodos, setCompleteTodos] = useState(["TODO1", "TODO2"]);
  return (
    <>
      <div className="input-area">
        <input placeholder="Input a TODO" value={todoText} />
        <button>Add</button>
      </div>
      <div className="incomplete-area">
        <p className="title">Incomplete TODOs</p>
        <ul>
          {incompleteTodos.map((todo) => (
            <li key={todo}>
              <div className="list-row">
                <p className="todo-item">{todo}</p>
                <button>Complete</button>
                <button>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">Complete TODOs</p>
        <ul>
          {completeTodos.map((todo) => (
            <li key={todo}>
              <div className="list-row">
                <p className="todo-item">{todo}</p>
                <button>Go Back</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
