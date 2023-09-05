import {useState} from "react";

const ListItem = ({index, task, editTask, setEditTask, handleEdit, handleDelete}) => {    
    const [isEditing, setIsEditing] = useState(false);
    
    const runHandleEdit = (event, index) => {
        handleEdit(event, index);
        setIsEditing(false);
    }

    return (
        <div>
            {
                !isEditing &&
                <h3>{task.task}</h3>
            }
            {
                !isEditing &&
                <button
                    onClick={() => {setIsEditing(true)}}>
                    Edit Task
                </button>
            }
            {
                isEditing && 
                <form
                    onSubmit={(event) => { runHandleEdit(event, index) }}>
                    <label>Edit Task Here: </label>
                    <input
                        type="text"
                        value={editTask}
                        onChange={(event) => setEditTask(event.target.value)}
                    />
                    <button>Edit Task</button>
                </form>
            }
            <button
                onClick={() => {handleDelete(index)}}>
                Delete Task
            </button>
        </div>
    );
}
 
export default ListItem;