import {useState} from 'react';
import trash from './icons8-poubelle-30.png';
import edit from './icons8-modifier-50.png';
import TodoForm from './TodoForm';


function TodoItem({ task, onDeleteTask, onEditTask, isEditing, editTask }) {
    const [editedText, setEditedText] = useState(task);

    function handleDelete() {
        onDeleteTask();
    }

    function handleEdit() {
        editTask(); 
        setEditedText(task);
    }

    function handleInputChange(e) {
        setEditedText(e.target.value);
    }

    function handleSave() {
        onEditTask(editedText);
    }

    return (
        <div class="todo">
            <input type="checkbox"  />
            {isEditing ? (
                <div class="cent">
                    <input
                        type="text"
                        value={editedText}
                        onChange={handleInputChange}
                    />
                    <button type="button" onClick={handleSave}>
                        Save
                    </button>
                </div>
            ) : (
                    <div class="cent">
                        <label htmlFor={task}>{task}</label>
                        <button class="delete-btn" type="button" onClick={handleEdit}>
                        <img src={edit} alt="edit" class="edit-img" />
                        </button>
                    </div>
                )}
            <button class="delete-btn" onClick={handleDelete} type="button" value="delete">
                <img src={trash} alt="Delete" class="trash-img" />
</button>
        </div>
    );
}

  
  export default TodoItem;