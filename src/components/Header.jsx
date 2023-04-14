import React from 'react'

const Header = ({setAdding}) => {

  return (
    <div>
      <h1>Employee Management Software</h1>
      <div>
        <button onClick={() => setAdding(true)} className='round-button'>
            Add new Employee
        </button>
      </div>
    </div>
    
  )
}

export default Header
