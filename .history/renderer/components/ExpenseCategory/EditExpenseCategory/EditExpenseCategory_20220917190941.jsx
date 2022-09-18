import React, { useState, useEffect } from 'react';
import styles from './EditExpenseCategory.module.scss';
import Rest from '../../../rest/Rest.tsx';
import ExpenseCategory from '../../../model/ExpenseCategory.tsx';

const INITIAL_URL = "http://localhost:8080/api/v1";

function capitalizeData(data){
    data = data.charAt(0).toUpperCase() + data.slice(1).toLowerCase();
    return data;
}

export default function EditExpenseCategory({ editSuccessAction, expenseCategoryId, expenseCategoryName }) {
    const rest = new Rest();
    const [newCategoryData, setNewCategoryData] = useState(
        new ExpenseCategory (
            expenseCategoryId[0],
        )
    )

  return (
    <div className={styles.container}>

    </div>
  )
}
