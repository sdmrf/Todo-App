import "./App.scss";
import Task from "./Task";
import { useReducer, useState, useEffect } from "react";

// ACTIONS
export const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo"
};

const App = () => {
  // Reducer
  const reducer = (state, action) => {
    switch (action.type) {
      case ACTIONS.ADD_TODO:
        return [...state, { id: state.length + 1, name: action.payload.name, complete: false }];

      case ACTIONS.TOGGLE_TODO:
        return state.map((todo) => {
          if (todo.id === action.payload.id) {
            return { ...todo, complete: !todo.complete };
          }
          return todo;
        });

      case ACTIONS.DELETE_TODO:
        return state.filter((todo) => todo.id !== action.payload.id);

      default:
        return state;
    }
  };

  // Load todos from local storage on initial render
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [state, dispatch] = useReducer(reducer, initialState);

  // Save todos to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state));
  }, [state]);

  // handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "") return;
    dispatch({
      type: ACTIONS.ADD_TODO,
      payload: { name }
    });
    setName("");
  };

  // Name
  const [name, setName] = useState("");

  console.log(state);

  return (
    <div className="App">
      <div className="Title">
        <h1>Todo App</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="AddTask">
          <input type="text" placeholder="Add a new task.." value={name} onChange={(e) => setName(e.target.value)} />
          <button>Add</button>
        </div>
      </form>
      <div className="Tasks">
        {state.map((todo) => {
          return <Task key={todo.id} Task={todo} dispatch={dispatch} />;
        })}
      </div>
    </div>
  );
};

export default App;
