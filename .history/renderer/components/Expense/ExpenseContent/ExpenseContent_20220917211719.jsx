import React, { useState, useEffect } from 'react';
import styles from './ExpenseContent.module.scss';
import Rest from '../../../rest/Rest.tsx';

const INITIAL_URL = "http://localhost:8080/api/v1";

export default function ExpenseContent() {
    const rest = new Rest();

  const [expenseData, setExpenseData] = useState([]);
  const handleExpenseData = (data) => {
    setExpenseData(data);
  }
  const getExpenseData = () => {
    rest.get(`${INITIAL_URL}/expense/transaction`, handleExpenseData)
  }

  useEffect(() => {
    getExpenseData();
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
                <div className={styles.active_table}>
                </div>
                <div className={styles.inactive_table}>
                  <InactivePositionsTable 
                    activateSuccessAction={activateSuccessAction}
                    inactivePositions={inactivePositions}
                  />
                </div>
              </div>
            </div>
        </div>
  )
}
