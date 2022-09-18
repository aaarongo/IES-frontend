import React, { useState, useEffect } from 'react';
import styles from './ExpenseMoreInfo.module.scss';

export default function ExpenseMoreInfo({ selectedValues }) {
    console.log(selectedValues[0])
    const [values, setValues] = useState([])
    const getValues = () => {
        selectedValues[0].map((item) => {
            setValues({
                id: item.transactionId,
                transactionDate: item.transactionDate,
                supplyName: item.supplyName,
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
