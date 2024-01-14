import React from 'react'

const AppExpensesFilter = ({setSelectedFilter, selectedFilter}) =>{
  return (
    <div className="app__expenses__container__select">
        <select defaultValue={selectedFilter}
        onChange={(e)=> setSelectedFilter(e.target.value)}>
            <option value =""></option>
            <option value = "Ascending">Ascending</option>
            <option value = "Descending">Descending</option>
        </select>
       
    </div>
  );
}

export default AppExpensesFilter;