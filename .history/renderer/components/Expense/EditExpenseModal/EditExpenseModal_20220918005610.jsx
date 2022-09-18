import React from 'react';
import styles from './EditExpenseModal.module.scss';
import Rest from '../../../rest/Rest.tsx';
import Expense from '../../../model/Expense.tsx';

export default function EditExpenseModal({ reload, selectedValues }) {


  return (
    <div className={styles.container}>
        <div className={styles.header}>
            Edit Expense ID: {selectedValues.expenseId}
        </div>
    </div>
  )
}
