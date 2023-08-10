import "./App.scss"
import Task from "./Task"
import { useReducer, useState } from "react"

// ACTIONS
export const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo"
}





const App = () => {

  // Reducer
  const reducer = (state, action) => {
    switch (action.type) {
      case ACTIONS.ADD_TODO:
        return [...state, { id: state.length + 1, name: action.payload.name }];


      case ACTIONS.TOGGLE_TODO:
        return state.map((state) => {
          if (state.id === action.payload.id) {
            return { ...state, complete: !state.complete }
          }
          return state;
        })
      case ACTIONS.DELETE_TODO:
        return state.filter((state) => state.id !== action.payload.id);

      default:
        return state;
    }
  }
  // Initial State
  const initialState = [];
  //useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  //handleSubmit

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "") return;
    dispatch({
      type: ACTIONS.ADD_TODO,
      payload: { name }
    })
    setName("");

  }
  // Name
  const [name, setName] = useState("");

  console.log(state)

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
        {state.map((Obj) => {
          return (
            <Task key={Obj.id} Task={Obj} dispatch={dispatch} />
          )
        })}
      </div>
    </div>
  )
}

export default App