const AddTask = ({newTask, setNewTask, handleAdd}) => {
    return (
        <form 
            className="add-task"
            onSubmit={handleAdd}>
            <input
                type="text"
                value={newTask}
                onChange={(event) => { setNewTask(event.target.value) }}
            />
            <button>
                <img className="plus-icon" src="./plus-small.svg" alt="small plus icon" />
            </button>
        </form>
    );
}

export default AddTask;