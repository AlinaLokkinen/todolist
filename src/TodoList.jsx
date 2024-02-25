import { useState } from "react";
import TodoTable from "./TodoTable";
// import TodoTable from "./TodoTable";



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

    return (
        <>
          <p>Description: <input type="text" onChange={handleChange} value={task.description} name="description" /></p>
          <p>Date: <input type="text" onChange={handleChange} value={task.date} name="date" /></p>
          <button onClick={addTodo}>Add</button>
          <TodoTable todos={todos} /> 
        </>
      );
  }
  
  export default TodoList;