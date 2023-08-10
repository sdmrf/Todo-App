import "./App.scss"

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
      </div>

    </div>
  )
}

export default App