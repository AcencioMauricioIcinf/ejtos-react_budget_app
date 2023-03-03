import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const btnStyle = {
        borderRadius: '50%',
        fontWeight: 'bolder',
    };

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const changeAllocation = (name, inc) => {
        const expense = {
            name: name,
            cost: 10,
        };

        const type = inc ? 'ADD_EXPENSE' : 'RED_EXPENSE';

        dispatch({
            type,
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><button className='btn btn-success' style={btnStyle} onClick={event=> changeAllocation(props.name, true)}>+</button></td>
        <td><button className='btn btn-danger' style={btnStyle} onClick={event=> changeAllocation(props.name, false)}>-</button></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
