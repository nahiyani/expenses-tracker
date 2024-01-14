import React , {useState, useEffect} from 'react';

import './App.css';
import AppBar from './components/AppBar/AppBar';
import AppControlsCounter from './components/AppControls/AppControlsCounter';
import AppControlsDelete from './components/AppControls/AppControlsDelete';
import AppControlsInputs from './components/AppControls/AppControlsInputs';
import AppExpensesList from './components/AppExpensesList/AppExpensesList';
import AppModel from './components/AppModel/AppModel'
import AppExpensesFilter from './components/AppExpensesFilter/AppExpensesFilter';
import AppFooter from './components/AppFooter/AppFooter';

const App = () => {
  
  const [expenses, setExpenses] = useState([]);
  const [expenseName, setExpenseName] = useState("");
  const [amount, setAmount] = useState(0);
  const [openModel, setOpenModel] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("");

  const addExpensesHandler = () =>{
    const oldExpenses = [...expenses];
    const expense = {expenseName, amount, id:Math.floor(Math.random() * 1000)}
    const newExpenses = oldExpenses.concat(expense);
        
    if(expenseName === ""){
      setOpenModel(true);  
    } else {
      setExpenses(newExpenses);
      localStorage.setItem("expenses", JSON.stringify(newExpenses))
    }

    setExpenseName("");
    setAmount(0);
  }

  const deleteExpenseHandler = (id) =>{
    const oldExpenses = [...expenses];
    const newExpenses = oldExpenses.filter((expense)=>expense.id !== id);

    setExpenses(newExpenses);
    localStorage.setItem("expenses", JSON.stringify(newExpenses))

  }

  const deleteAllExpenses = () =>{
    setExpenses([]);
    localStorage.clear();
  }

  const total = expenses.map((expense) => expense.amount).reduce((acc, value) => acc + +value, 0);

  useEffect(() => {
    const oldState = [...expenses];
    if (selectedFilter === "Ascending"){
      const ascendingExpenses = oldState.sort((a,b)=> a.amount - b.amount);
      setExpenses(ascendingExpenses);
    } else if (selectedFilter === 'Descending'){
      const descendingExpenses = oldState.sort((a,b)=> b.amount - a.amount);
      setExpenses(descendingExpenses);
    }
  }, [selectedFilter])
  
  return (
    <div className="App">
      <AppBar />
      
      { openModel ? <AppModel setOpenModel = {setOpenModel} /> : ""}
      
      <AppControlsCounter total={total}/>
      <AppControlsDelete deleteAllExpenses={deleteAllExpenses}/>
      <AppControlsInputs 
        addExpensesHandler={addExpensesHandler} 
        expenseName={expenseName} 
        amount={amount}
        setExpenseName={setExpenseName} 
        setAmount={setAmount}
      />

      <div className='app__expenses__container'>
        <AppExpensesFilter selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter}/>
        <AppExpensesList expenses={expenses} deleteExpenseHandler={deleteExpenseHandler}/>
      </div>
      <AppFooter />
    </div>
  )
}

export default App
