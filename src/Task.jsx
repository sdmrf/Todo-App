import "./App.scss"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const Task = () => {
    return (
        <div className="Task">
            <div className="Task-Text">
                <p>Task 1</p>
            </div>
            <div className="Task-Buttons">
                <button >Done</button>
                <div className="Task-Delete" >
                    <DeleteForeverIcon />
                </div>
            </div>
        </div>
    )
}

export default Task