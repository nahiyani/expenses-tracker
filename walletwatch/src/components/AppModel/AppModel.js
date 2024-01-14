import React from 'react'

const AppModel = ({setOpenModel}) => {
    return (
      
      <div className="app__model">
          <div className='blank'></div>
          <h3>Expense name cannot be blank</h3>
          <button className="btn__close__model" onClick={() => setOpenModel(false)}>Close</button>
      </div>
    
    )
  }

export default AppModel