import { useState } from "react";

const OldBody = () => {
    const [listItems, setListItems] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [editTask, setEditTask] = useState("");
    const [isEditing, setIsEditing] = useState([]);

    const handleAdd = (event) => {
        event.preventDefault();
        setListItems([...listItems, { title: newTask }]);
        setIsEditing([...isEditing, false]);
    }

    const handleIsEditing = (index) => {
        isEditing[index] = true;
        setIsEditing([...isEditing]);
    }

    const handleEdit = (event, index) => {
        event.preventDefault();
        listItems[index] = { title: editTask };
        setListItems([...listItems]);
        isEditing[index] = false;
        setIsEditing([...isEditing]);
    }

    const handleDelete = (index) => {
        const newList = listItems.filter(task => listItems.indexOf(task) !== index);
        setListItems(newList);
    }

    return (
        <div className="body">
            <form onSubmit={handleAdd}>
                <label>Add New Task: </label>
                <input type="text" value={newTask} onChange={(event) => setNewTask(event.target.value)} />
                <button>Add New Task</button>
            </form>
            {listItems.map((task) => (
                <div key={listItems.indexOf(task)}>
                    <h3>{task.title}</h3>
                    {!isEditing[listItems.indexOf(task)] && <button onClick={() => { handleIsEditing(listItems.indexOf(task)) }}>Edit Task</button>}
                    {isEditing[listItems.indexOf(task)] &&
                        <form onSubmit={(event) => { handleEdit(event, listItems.indexOf(task)) }}>
                            <label>Edit Task Here: </label>
                            <input type="text" value={editTask} onChange={(event) => setEditTask(event.target.value)} />
                            <button>Edit Task</button>
                        </form>
                    }
                    <button onClick={() => handleDelete(listItems.indexOf(task))}>Click to Delete</button>
                </div>
            ))}
        </div>
    );
}

export default OldBody;