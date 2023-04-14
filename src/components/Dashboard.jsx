import React, { useState } from "react";
import Swal from "sweetalert2";

import Header from "./Header";
import Add from "./Add";
import Edit from "./Edit";
import List from "./List";

import { employeeData } from "../data";

const Dashboard = () => {
  const [isAdding, setAdding] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [employees, setEmpployees] = useState(employeeData);
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = (id) => {
    //todo
    Swal.fire({
      icon: "warning",
      title: "Are you sure?",
      showCancelButton: true,
      confirmButtonText: "Yes delete it!",
      cancelButtonText: "Don't cancel",
    }).then((res) => {
      if (res.value) {
        const [employee] = employees.filter((employee) => employee.id === id);
        Swal.fire({
          icon: "success",
          title: "Deleted",
          showConfirmButton: false,
          timer: 1500,
        });
        setEmpployees(employees.filter((employee) => employee.id !== id));
      }
    });
    // console.log("id -> ", id);
  };
  const handleEdit = (id) => {
    // which wil take id and
    const [employee] = employees.filter(employee => employee.id === id);

    setSelectedEmployee(employee);
    setIsEditing(true);
    // console.log("id -> ", id);
  };
  return (
    <div className="container">
      {!isAdding && !isEditing && (
        <>
          <Header setAdding={setAdding} />
          <List
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            employees={employees}
          />
        </>
      )}
      {isAdding && (
        <Add
          employees={employees}
          setEmpployees={setEmpployees}
          setAdding={setAdding}
        />
      )}

      {isEditing && (
        <Edit
          employees={employees}
          selectedEmployee={selectedEmployee}
          setEmpployees={setEmpployees}
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  );
};

export default Dashboard;
