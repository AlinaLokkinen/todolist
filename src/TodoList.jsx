import { useState } from "react";
import TodoTable from "./TodoTable";

function TodoList() {

    const [task, setTask] = useState({description: "", date: ""});
    const [todos, setTodos] = useState([]);

    const handleChange = (event) => {
     setTask({...task, [event.target.name]: event.target.value});
    };
      
      // Remember to call preventDefault() if using form
    const addTodo = () => {
       setTodos([...todos, task]);
    };

    function handleDelete(index) {
      const newTodos = todos.filter((todo, i) => i !== index);
      setTodos(newTodos);
    };

    return (
        <>
        <p>Add todo: </p>
          <p>Description: <input type="text" onChange={handleChange} value={task.description} name="description" /></p>
          <p>Date: <input type="text" onChange={handleChange} value={task.date} name="date" /></p>
          <button onClick={addTodo}>Add</button>
          <TodoTable todos={todos} handleDelete={handleDelete} />
        </>
      );
  }
  
  export default TodoList;
