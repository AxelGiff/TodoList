import TodoForm from "./TodoForm"
import TodoItem from "./TodoItem"

import {useState} from 'react';

function TodoList() {
    const [items, setItems] = useState([])
    const [editIndex, setEditIndex] = useState(null);

    function handleAddTask(newItem) {
        setItems(prevItems => [...prevItems, newItem]);
    }

    const deleteTask = index => {
        setItems(prevItems => prevItems.filter((_, i) => i !== index));
    }

    const editTask = index => {
        setEditIndex(index);
    };

    const handleModelChange = (editedTask) => {
        setItems(prevItems =>
            prevItems.map((item, i) =>
                i === editIndex ? editedTask : item
            )
        );
        setEditIndex(null);
    };

    return (
        <div>
            <TodoForm onAddTask={handleAddTask} />
            <ul>
                {items.map((task, index) => (
                    <TodoItem
                        key={index}
                        task={task}
                        onDeleteTask={() => deleteTask(index)}
                        onEditTask={handleModelChange}
                        isEditing={editIndex === index}
                        editTask={() => editTask(index)}
                    />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
