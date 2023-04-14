import React from "react";

const List = ({ employees, handleEdit, handleDelete }) => {
  return (
    <div>
      <table className="striped-table">
        <thead>
          <tr>
            <th>No. </th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Email</th>
            <th>Salary</th>
            <th>Date</th>
            <th>Department</th>
            <th colSpan={2} className="text-center">
                Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {employees.length > 0 ? (
            employees.map((employee , index) => (
              <tr key={employee.id}>
                <td>{index+1}</td>
                <td>{employee.firstname}</td>
                <td>{employee.lastname}</td>
                <td>{employee.email}</td>
                <td>{employee.salary}</td>
                <td>{employee.date}</td>
                <td className="text-right">
                  <button onClick={() => handleEdit(employee.id)} className="button muted-button">
                    Edit
                  </button>
                </td>
                <td className="text-left">
                  <button onClick={()=> handleDelete(employee.id)} className="button muted-button">
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (<tr>
            <td colSpan={7}>

            No Employess
            </td>
            </tr>)}
        </tbody>
      </table>
    </div>
  );
};

export default List;
