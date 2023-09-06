import {useState} from "react";

const ListItem = ({index, task, editTask, setEditTask, handleEdit, handleDelete}) => {    
    const [isEditing, setIsEditing] = useState(false);
    
    const runHandleEdit = (event, index) => {
        handleEdit(event, index);
        setIsEditing(false);
    }

    return (
        <div className="list-item">
            {
                !isEditing &&
                <span>{task.task}</span>
            }
            {
                !isEditing &&
                <button
                    onClick={() => {setIsEditing(true)}}>
                        <img className="edit-icon" src="./pencil.svg" alt="small pencil for editing" />
                </button>
            }
            {
                isEditing && 
                <form
                    onSubmit={(event) => { runHandleEdit(event, index) }}>
                    <label>Edit Task: </label>
                    <input
                        className="input-edit"
                        type="text"
                        value={editTask}
                        onChange={(event) => setEditTask(event.target.value)}
                    />
                    <button>
                            <img className="edit-icon" src="./pencil.svg" alt="small pencil for editing" />
                    </button>
                </form>
            }
            <button
                onClick={() => {handleDelete(index)}}>
                <img className="delete-icon" src="./delete.svg" alt="small x for deleting" />
            </button>
        </div>
    );
}
 
export default ListItem;