import "./App.scss"
import Task from "./Task"

const App = () => {
  return (
    <div className="App">
      <div className="Title">
        <h1>Todo App</h1>
      </div>
      <div className="AddTask">
        <input type="text" placeholder="Add a new task.." />
        <button>Add</button>
      </div>
      <div className="Tasks">
        <Task />
        <Task />
        <Task />
      </div>
    </div>
  )
}

export default App