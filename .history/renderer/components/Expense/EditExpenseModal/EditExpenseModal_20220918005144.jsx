import React from 'react';
import styles from './EditExpenseModal.module.scss';

export default function EditExpenseModal({ selectedValues }) {
  return (
    <div className={styles.container}>
        <div className={styles.header}>
            Edit Expense ID: {seelectedValues.expenseId}
        </div>
    </div>
  )
}
