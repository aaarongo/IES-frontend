import React, { useState, useEffect } from 'react';
import styles from './ExpenseContent.module.scss';
import Rest from '../../../rest/Rest.tsx';
import Toast from '../../Shared/Toast/Toast.jsx';
import MediumButton from '../../Shared/MediumButton/MediumButton';
import { Modal } from '@mui/material';
import ExpenseTable from '../ExpenseTable/ExpenseTable';
import ExpenseEditableTable from '../ExpenseEditableTable/ExpenseEditableTable';

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
  //editable expense data
  const [expenseEditableData, setExpenseEditableData] = useState([]);
  const handleExpenseEditableData = (data) => {
    setExpenseEditableData(data);
  }
  const getExpenseEditableData = () => {
    rest.getPost(
        `${INITIAL_URL}/expense`,
        '',
        handleExpenseEditableData
    )
  }
  //add modal
  const [openAddModal, setOpenAddModal] = useState(false);
  const handleOpenAddModal = () => { setOpenAddModal(true) };
  const handleCloseAddModal = () => { setOpenAddModal(false) };

  //reload
  const reload = () => {
    getExpenseData();
  }

  useEffect(() => {
    getExpenseData();
    getExpenseEditableData();
  }, [])

  return (
    <div className={styles.container}>
      <Toast />
      <div className={styles.content}>
        <div className={styles.header}>
          <button onClick={handleOpenAddModal}>
            <MediumButton label="Add Employee Position" />
          </button>
        </div>
        <div className={styles.tables}>
          <div className={styles.expense_table}>
          <ExpenseEditableTable
            reload={reload}
            expenseEditableData={expenseEditableData}
            />
          </div>
          <div className={styles.expense_editable_table}>
           
            <ExpenseTable
            expenseData={expenseData}
            />
          </div>
        </div>
      </div>      
      <Modal open={openAddModal} onClose={handleCloseAddModal}>
        <div className={styles.modal}>
          a
        </div>
      </Modal>
    </div>
  )
}
