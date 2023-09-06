import ListItem from "./ListItem"

const List = ({listItems, setListItems, editTask, setEditTask, handleEdit, handleDelete}) => { 
    return (
        <div className="list">
            {listItems.map((task, index) => (
                <ListItem
                    key={index}
                    index={index}
                    task={task}
                    editTask={editTask}
                    setEditTask={setEditTask}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                />
            ))}
        </div>
    );
}
 
export default List;