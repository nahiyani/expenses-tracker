import React from 'react'

const AppControlsDelete = ({deleteAllExpenses}) => {
  return (
    <div className='app__controls__delete'>
        <button className='btn__delete__all' onClick={() => deleteAllExpenses()}>Delete All</button>
    </div>
  )
}

export default AppControlsDelete