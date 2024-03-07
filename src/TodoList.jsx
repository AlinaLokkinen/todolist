import { useState } from "react";
// import TodoTable from "./TodoTable";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";

function TodoList() {

    const [task, setTask] = useState({desc: "", priority:"", date: ""});
    const [todos, setTodos] = useState([]);

    const [columnDefs, setColumnDefs] = useState([
      {field: 'desc', sortable: true, filter: true, floatingFilter: true},
      { field: "priority", sortable: true, filter: true, 
    cellStyle: params => params.value === "high" ? {color: 'red'} : {color: 'black'} },
      {field: 'date', filter: true, floatingFilter: true}
    ]);

    const handleChange = (event) => {
     setTask({...task, [event.target.name]: event.target.value});
    };
      
      // Remember to call preventDefault() if using form
    const addTodo = () => {
       setTodos([...todos, task]);
    };

    // function handleDelete(index) {
    //   const newTodos = todos.filter((todo, i) => i !== index);
    //   setTodos(newTodos);
    // }

    return (
        <>
        <p>Add todo: </p>
          <p>Description: <input type="text" onChange={handleChange} value={task.desc} name="desc" /></p>

          <p>Priority: <input type="text" onChange={handleChange} value={task.priority} name="priority" /></p>

          <p>Date: <input type="text" onChange={handleChange} value={task.date} name="date" /></p>

          <button onClick={addTodo}>Add</button>

          <div className="ag-theme-material" style={{width: 700, height: 500}}>
            <AgGridReact 
              rowData={todos}
              columnDefs={columnDefs}
            />
        </div>
        </>
      );
  }
  
  export default TodoList;
