import { useState } from "react";
import AddTask from "./AddTask";
import List from "./List";

const Body = () => {
    const [listItems, setListItems] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [editTask, setEditTask] = useState("");
    
    const handleAdd = async (event) => {
        event.preventDefault();
        setListItems([...listItems, newTask]);
        const response = await fetch("http://localhost:8000/listItems", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({newTask})
        });
        console.log("new task:", newTask);
        const json = await response.json();
        if(response.ok) {
            console.log("Received task from server", json.newTask);
        }
    }

    const handleEdit = (event, index) => {
        event.preventDefault();
        listItems[index] = editTask;
        setListItems([...listItems]);
    }

    const handleDelete = (index) => {
        const newList = listItems.filter(task => listItems.indexOf(task) !== index);
        setListItems(newList);
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