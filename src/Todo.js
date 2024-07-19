import { useState } from "react";
import TodoList from "./TodoList";
// let x = 10
function Todo(){
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");
    return (
        <div >
            <input type="" placeholder="new todo.." 
                onChange={(event) => setNewTodo(event.target.value)}
            /> <br/>
            <button onClick = {() => setTodos([...todos, newTodo])}>Add todo </button>
            <TodoList todos = {todos}/>
        </div>
    );
}

export default Todo;