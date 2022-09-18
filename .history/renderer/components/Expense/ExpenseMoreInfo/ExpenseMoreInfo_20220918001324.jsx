import React, { useState, useEffect } from 'react';
import styles from './ExpenseMoreInfo.module.scss';

export default function ExpenseMoreInfo({ selectedValues }) {
    selectedValues.map((item) => {
        console.log(item.transactionId)
    })
    const [values, setValues] = useState([])
    const getValues = () => {
        selectedValues.map((item) => {
            setValues({
                id: item.transactionId,
                transactionDate: item.transactionDate,
                supplyName: item.supplyName,
                expenseCost: item.expenseCost
            })
        })
    }

    useEffect(() => {
        getValues();
    }, []);

  return (
    <div>ExpenseMoreInfo</div>
  )
}
