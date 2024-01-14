import React from 'react'

const AppControlsCounter = ({total}) => {
  return (
    <div className='app__controls__counter'>
        <h2><span className='total_amount_spent'>Total Amount Spent: $</span>{total}</h2>
    </div>
  )
}

export default AppControlsCounter