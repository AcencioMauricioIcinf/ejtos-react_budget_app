import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyList = () => {
    const { currencies, currency, dispatch } = useContext(AppContext);

    const changeCurrency = (val) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val,
        })
    }

    return (
        <div>
            <select className="custom-select alert alert-success dropdown-toggle" id="inputGroupSelect03" onChange={(event) => changeCurrency(event.target.value)}>
                {currencies.map((curr) => (
                    <option value={curr.symbol} name={curr.name} selected={currency === curr.symbol}>
                        {curr.symbol} {curr.name}
                    </option>))}
            </select>
        </div>
    )
}

export default CurrencyList;