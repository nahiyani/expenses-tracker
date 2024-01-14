import React from 'react';

const AppExpensesList = ({expenses, deleteExpenseHandler}) => {
        
    return (
      <div className='app__expenses__container__wrapper'>
        {expenses.length === 0 ? (
          <div className='no_expenses'>No expenses to display</div>
        ) : (
          expenses?.map((expense, index) => (
            <div key={index} className='app__expenses__container__wrapper__inner'>
              <div className='expense__display'>{`${expense.expenseName}: $${expense.amount}`}</div>
              <div>
                <button className='btn__delete__expense' onClick={()=> (deleteExpenseHandler(expense.id))} >Delete</button>
              </div>
            </div>
          ))
        )}
      </div>
    );
  }
  
  export default AppExpensesList;

