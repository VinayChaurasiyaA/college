import React, { useEffect, useRef, useState } from 'react'
import Swal from 'sweetalert2'
const Add = ({employees , setEmpployees , setAdding}) => {
  const [firstname , setFirstName] = useState('')
  const [lastname , setLastName] = useState('')
  const [email , setEmail] = useState('')
  const [salary , setSalary] = useState('')
  const [date , setDate] = useState('')

  const textInput = useRef(null);
  useEffect(() => {
    textInput.current.focus();
  } , [])
  const handleAdd = (e) => {
    // Todo
    e.preventDefault();
    if(!firstname || !lastname || !email || !salary || !date) {
      return Swal.fire( {
        icon : "error",
        title : "Error!",
        text : "All fields are required",
        showConfirmButton: true
      })
    }
    const id = employees.length +1;
    const newAdd = {
      id  , 
      firstname ,
      lastname  , 
      email,
      salary  , 
      date,
    }
    employees.push(newAdd);
    setEmpployees(employees);
    setAdding(false);
    Swal.fire({
      icon : "success",
      title : "Added!",
      showConfirmButton : false,
      timer : 1500,
    })
  }
  return (
    <div className='small-container'>
      <form action="" onSubmit={handleAdd}>
        <h1>Add Employee</h1>
        <label htmlFor="firstname">FirstName</label>
        <input type="text" 
          id='firstname'
          ref = {textInput}
          name = "firstname"
          value={firstname}
          onChange ={e => setFirstName(e.target.value)}
        />
        <label htmlFor="lastname">LastName</label>
        <input type="text" 
          id='lastname'
          // ref = {textInput}
          name = "lastname"
          value={lastname}
          onChange ={e => setLastName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input type="email" 
          id='email'
          // ref = {textInput}
          name = "email"
          value={email}
          onChange ={e => setEmail(e.target.value)}
        />
        <label htmlFor="salary">Salary</label>
        <input type="Number" 
          id='salary'
          // ref = {textInput}
          name = "salary"
          value={salary}
          onChange ={e => setSalary(e.target.value)}
        />
        <label htmlFor="date">Date</label>
        <input type="date" 
          id='date'
          // ref = {textInput}
          name = "date"
          value={date}
          onChange ={e => setDate(e.target.value)}
        />
        <div >
          <input type="submit" value="Add"/>
          <input className='muted-button'type="button" value="Cancel" onClick={() => setAdding(false)} />
        </div>
      </form>
     
    </div>
  )
}

export default Add
