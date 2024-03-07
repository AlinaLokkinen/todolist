// // import React from "react"; <- tämä ei tee mitään muuta kuin ilmoita virheestä?

// function TodoTable(props) {
    
//       return (
//           <>
//             <table>
//               <tbody>
//                 <tr>
//                   <th>Date</th>
//                   <th>Priority</th>
//                   <th>Description</th>
//                 </tr>
//                 {props.todos.map((item, index) => (
//                   <tr key={index}>
//                     <td>{item.date}</td>
//                     <td>{item.priority}</td>
//                     <td>{item.desc}</td>
//                     <td><button onClick={() => props.handleDelete(index)}>Delete</button></td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table> 
//           </>
//         );
//   }
  
//   export default TodoTable;