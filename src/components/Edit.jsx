import React, { useState, useRef, useEffect } from "react";
import Swal from "sweetalert2";

const Edit = ({
  employees,
  selectedEmployee,
  setEmpployees,
  setIsEditing,
}) => {
  const id = selectedEmployee.id;

  const [firstname, setFirstName] = useState(selectedEmployee.firstname);
  const [lastname, setLastName] = useState(selectedEmployee.lastname);
  const [email, setEmail] = useState(selectedEmployee.email);
  const [salary, setSalary] = useState(selectedEmployee.salary);
  const [date, setDate] = useState(selectedEmployee.date);

  // const textInput = useRef(null);
  // useEffect(() => {
  //   textInput.current.focus();
  // }, []);

  const handleUpdate = (e) => {
    // todo
    e.preventDefault();
    if (!firstname || !lastname || !email || !salary || !date) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required",
        showConfirmButton: true,
      });
    }
    const employee = {
      id,
      firstname,
      lastname,
      email,
      salary,
      date,
    };
    // console.log(employees?.length)
    for (let i = 0; i < employees?.length; i++) {
      if (employees[i]?.id === id) {
        employees.splice(i, 1, employee);
        break;
      }
    }
    //  employeeData.push(employee);
    setEmpployees(employees);
    setIsEditing(false);
    Swal.fire({
      icon: "success",
      title: "Added!",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form action="" onSubmit={handleUpdate}>
        <h1>Edit Employee</h1>
        <label htmlFor="firstname">FirstName</label>
        <input
          type="text"
          id="firstname"
          // ref={textInput}
          name="firstname"
          value={firstname}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label htmlFor="lastname">LastName</label>
        <input
          type="text"
          id="lastname"
          // ref = {textInput}
          name="lastname"
          value={lastname}
          onChange={(e) => setLastName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          // ref = {textInput}
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="salary">Salary</label>
        <input
          type="Number"
          id="salary"
          // ref = {textInput}
          name="salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          // ref = {textInput}
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <div>
          <input type="submit" value="Update" />
          <input
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsEditing(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Edit;
