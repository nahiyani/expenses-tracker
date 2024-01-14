import React from 'react'

const AppControlsInputs = ({addExpensesHandler, expenseName, amount, setExpenseName, setAmount}) => {

    const onAddExpensesClick = () =>{
        addExpensesHandler();
    }
    
    return (
        <div className='app__controls'>
            <div className='app__controls__inputs'>
                <input type='text' placeholder='Expense' value={expenseName} onChange={(e) =>setExpenseName(e.target.value)}></input>
                <input type='number' placeholder='$' value={amount} onChange={(e) => setAmount(e.target.value)}></input>
                <button onClick={onAddExpensesClick} className='btn__add__expense'>Add Expense</button>
            </div>
            
        </div>
    );

};
    

export default AppControlsInputs;