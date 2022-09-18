import React, { useState, useEffect } from 'react';
import styles from './ExpenseContent.module.scss';
import Rest from '../../../rest/Rest.tsx';
import Toast from '../../Shared/Toast/Toast.jsx';
import MediumButton from '../../Shared/MediumButton/MediumButton';

const INITIAL_URL = "http://localhost:8080/api/v1";

export default function ExpenseContent() {
    const rest = new Rest();
    //non editable expense data
  const [expenseData, setExpenseData] = useState([]);
  const handleExpenseData = (data) => {
    setExpenseData(data);
  }
  const getExpenseData = () => {
    rest.getPost(
        `${INITIAL_URL}/expense/transaction`,
        '',
        handleExpenseData
    )
  }
  //add modal
  const [openAddModal, setOpenAddModal] = useState(false);
  const handleOpenAddModal = () => { setOpenAddModal(true) };
  const handleCloseAddModal = () => { setOpenAddModal(true) };

  useEffect(() => {
    getExpenseData();
  }, [])

  return (
    <div className={styles.container}>
      <Toast />
        <div className={styles.content}>
          <div className={styles.header}>
            <button onClick={handleOpenAddModal}>
              <MediumButton label="Add Expense" />
            </button>
          </div>
          <div className={styles.tables}>
            <div className={styles.expense_table}>
                s
            </div>
            <div className={styles.expense_editable_table}>
                b
            </div>
          </div>
        </div>
    </div>
  )
}
