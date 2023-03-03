import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { dispatch, budget, maxBudget, expenses, currency } = useContext(AppContext);

    const changeBudget = (newBudget) => {
        if (newBudget > maxBudget) {
            alert("The budget cannot exceed the limit of £"+ maxBudget);
            return;
        }
        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0);
        if (newBudget < totalExpenses) {
            alert("The budget cannot be lower than the spending");
            return;
        }
        dispatch({
            type: 'SET_BUDGET',
            payload: newBudget,
        })
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}
                <input
                    required='required'
                    type='number'
                    id='budget'
                    step={10}
                    value={budget}
                    onChange={(event) => changeBudget(event.target.value)}>
                </input></span>
        </div>
    );
};
export default Budget;
