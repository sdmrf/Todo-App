import "./App.scss"
import { ACTIONS } from "./App"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const Task = ({ Task, dispatch }) => {
    return (
        <div className="Task">
            <div className={(Task.complete?"Task-Text Completed" : "Task-Text")}>
                <p>{Task.name}</p>
            </div>
            <div className="Task-Buttons">
                <button onClick={() => dispatch({type: ACTIONS.TOGGLE_TODO, payload:{id: Task.id}})}>{Task.complete? "Ongoing": "Done"}</button>
                <div className="Task-Delete" onClick={() => dispatch({type: ACTIONS.DELETE_TODO, payload: {id: Task.id}})} >
                    <DeleteForeverIcon />
                </div>
            </div>
        </div>
    )
}

export default Task