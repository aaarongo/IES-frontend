import React, { useState } from 'react';
import styles from './EditExpenseModal.module.scss';
import Rest from '../../../rest/Rest.tsx';
import Expense from '../../../model/Expense.tsx';
import { TextField } from '@mui/material';

export default function EditExpenseModal({ reload, expenseCategories, selectedValues }) {
    const rest = new Rest();
    //selected
    const selectedExpense = selectedValues[0];
    const [values, setValues] = useState(
        new Expense(
            selectedExpense.expenseId,
            selectedExpense.expenseCategoryName,
            selectedExpense.expenseDescription,
            selectedExpense.expenseDate,
            selectedExpense.expenseCost
        )
    );
    //onChange for all inputs
    const onChange = (e) => {
        if(e.target == undefined){
        setValues({...values, [e.key]:e.value})
        }else{
        setValues({...values, [e.target.name]:capitalizeData(e.target.value)})
        }
    }

  return (
    <div className={styles.container}>
        <div className={styles.header}>
            Edit Expense ID: {values.expenseId}
        </div>
        <div className={styles.content}>
        <div className={styles.group}>
          <div className={styles.group_textfields}>
            <div className={styles.group_textfields_row}>
              <TextField onChange={onChange} name="expenseCategoryName" label="Description" defaultValue={values.expenseCategoryName} variant="standard" fullWidth />
            </div>
            <div className={styles.group_textfields_row}>
              <TextField onChange={onChange} name="expenseDescription" label="Description" defaultValue={values.expenseDescription} variant="standard" fullWidth />
            </div>
          </div>
          <div className={styles.group_textfields}>
            <div className={styles.group_textfields_row}>
              <TextField onChange={onChange} name="expenseDescription" label="Description" defaultValue={selectedExpense.expenseDescription} variant="standard" fullWidth />
            </div>
            <div className={styles.group_textfields_row}>
              <TextField onChange={onChange} name="expenseDescription" label="Description" defaultValue={selectedExpense.expenseDescription} variant="standard" fullWidth />
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}
