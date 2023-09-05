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
                json.forEach((taskItem) => {
                    listItems.push(taskItem);
                });
                setListItems([...listItems]);
                console.log(listItems);
            }
        }
        fetchListItems();
        console.log("useEffect Ran");

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
            console.log("Received task from server", json.task);
            setListItems([...listItems, json]);
            console.log("New task id:", json._id);
        }
    }

    const handleEdit = (event, index) => {
        event.preventDefault();
        listItems[index] = editTask;
        setListItems([...listItems]);
    }

    const handleDelete = async (index) => {
        // Update list on backend
        const taskToDelete = listItems[index];
        const response = await fetch("http://localhost:8000/listItems/" + taskToDelete._id, {
            method: "DELETE",
            body: JSON.stringify({id: taskToDelete._id})
        });
        const deletedTask = await response.json();
        if(response.ok) {
            console.log("Deleted task:", deletedTask);
            // Update list on frontend
            const newList = listItems.filter(task => listItems.indexOf(task) !== index);
            setListItems(newList);
        }
    }

    return (
        <div>
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