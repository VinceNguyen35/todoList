import { useState, useEffect } from "react";
import AddTask from "./AddTask";
import List from "./List";

const Body = () => {
    const [listItems, setListItems] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [editTask, setEditTask] = useState("");
    
    useEffect(() => {
        const fetchListItems = async () => {
            const response = await fetch("http://localhost:8000/listItems");
            const json = await response.json();
            // Response will return an array of objects if working
            if(response.ok) {
                setListItems(json);
            }
        }
        fetchListItems();
    },[]);

    const handleAdd = async (event) => {
        event.preventDefault();
        const response = await fetch("http://localhost:8000/listItems", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({task: newTask})
        });
        const json = await response.json();
        if(response.ok) {
            setListItems([...listItems, json]);
            setNewTask("");
        }
    }

    const handleEdit = async (event, index) => {
        event.preventDefault();

        // Update task item on backend
        const response = await fetch("http://localhost:8000/listItems/" + listItems[index]._id, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({task: editTask})
        });
        if(response.ok) {
            // Update task item on frontend
            listItems[index].task = editTask;
            setListItems([...listItems]);
            setEditTask("");
        }
    }

    const handleDelete = async (index) => {
        // Update list on backend
        const taskToDelete = listItems[index];
        const response = await fetch("http://localhost:8000/listItems/" + taskToDelete._id, {
            method: "DELETE",
            body: JSON.stringify({id: taskToDelete._id})
        });
        if(response.ok) {
            // Update list on frontend
            const newList = listItems.filter(task => listItems.indexOf(task) !== index);
            setListItems(newList);
        }
    }

    return (
        <div className="body">
            <AddTask
                newTask={newTask}
                setNewTask={setNewTask}
                handleAdd={handleAdd}
            />
            <List
                listItems={listItems}
                setListItems={setListItems}
                editTask={editTask}
                setEditTask={setEditTask}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
            />
        </div>
    );
}
 
export default Body;