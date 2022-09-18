import React from 'react';
import styles from './EditExpenseModal.module.scss';

export default function EditExpenseModal({ reload, selectedValues }) {
    console.log(selectedValues)

  return (
    <div className={styles.container}>
        <div className={styles.header}>
            Edit Expense ID: {selectedValues.expenseId}
        </div>
    </div>
  )
}
