import React from 'react';
import styles from './EditExpenseCategory.module.scss';

function capitalizeData(data){
    data = data.charAt(0).toUpperCase() + data.slice(1).toLowerCase();
    return data;
}

export default function EditExpenseCategory() {
  return (
    <div className={styles.container}>

    </div>
  )
}
