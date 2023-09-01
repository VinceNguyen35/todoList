const AddTask = ({newTask, setNewTask, handleAdd}) => {
    return (
        <div className="addTask">
            <form onSubmit={handleAdd}>
                <label>Add New Task: </label>
                <input
                    type="text"
                    value={newTask}
                    onChange={(event) => {setNewTask(event.target.value)}}
                />
                <button>Add New Task</button>
            </form>
        </div>
    );
}

export default AddTask;