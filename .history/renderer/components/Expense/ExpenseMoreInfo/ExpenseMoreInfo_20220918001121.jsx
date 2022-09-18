import React, { useState, useEffect } from 'react';
import styles from './ExpenseMoreInfo.module.scss';

export default function ExpenseMoreInfo({ selectedValues }) {
    const [values, setValues] = useState([])
    const getValues = () => {
        selectedValues.map((item) => {
            item.map((data) => {
                setValues({
                    id: data.transactionId,
                    transactionDate: data.transactionDate,
                    supplyName: data.supplyName,
                    expenseCost: data.expenseCost
                })
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
