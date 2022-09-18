import React, { useState } from 'react';
import styles from './EditExpenseModal.module.scss';
import Rest from '../../../rest/Rest.tsx';
import Expense from '../../../model/Expense.tsx';

export default function EditExpenseModal({ reload, expenseCategories, selectedValues }) {
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

  return (
    <div className={styles.container}>
        <div className={styles.header}>
            Edit Expense ID: {values.expenseId}
        </div>
    </div>
  )
}
