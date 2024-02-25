// import React from "react"; <- tämä ei tee mitään muuta kuin ilmoita virheestä?

function TodoTable(props) {
    return (
        <>
          <table>
            <tbody>
              <tr>
                <th>Date</th>
                <th>Description</th>
              </tr>
              {props.todos.map((item, index) => (
                <tr key={index}>
                  <td>{item.date}</td>
                  <td>{item.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      );
}

export default TodoTable;