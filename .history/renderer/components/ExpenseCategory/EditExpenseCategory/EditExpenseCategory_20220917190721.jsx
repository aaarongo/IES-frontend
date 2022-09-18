import React from 'react';
import styles from './EditExpenseCategory.module.scss';
import Rest from '../../../rest/Rest.tsx';
import ExpenseCategory from '../../../model/ExpenseCategory.tsx';

const INITIAL_URL = "http://localhost:8080/api/v1";

function capitalizeData(data){
    data = data.charAt(0).toUpperCase() + data.slice(1).toLowerCase();
    return data;
}

export default function EditExpenseCategory({ editSuccessAction, expenseCategoryId, expenseCategoryName }) {
  return (
    <div className={styles.container}>
        {expenseCategoryName}
    </div>
  )
}
