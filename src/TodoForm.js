import TodoItem from "./TodoItem";
import {useState} from 'react';





function TodoForm({onAddTask}){
    const [list,setList] = useState([]);
    const [value,setValue] = useState('');

     function handleClick(e){
        e.preventDefault();
        onAddTask(value);
        setList([...list, value]);
        setValue('');

     }
    return (
        <div>
        <form id="todoForm" onSubmit={handleClick}>
            <label for="name" class="label-task">
            <input type="text" id="text_do" value={value} onChange={(e) => setValue(e.target.value)} />
            <span class="placeholder" id="placeholder"><ion-icon name="create-outline"></ion-icon>
                What are we doing today ?</span>
            </label>
            
            <button id="add_do_btn" type="submit">Add</button>
        </form>
        
        </div>
    )
}

export default TodoForm;