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
            <div className={styles.header}>
              <div className={styles.left}>
                Active Positions
              </div>
              <div className={styles.right}>
                {showButtons()}
              </div>
            </div>
            <div className={styles.sub_header}>
              <div className={styles.left}>
                <SearchBar 
                  // placeholder="Search Position Table"
                  value={searched}
                  onChange={(searchValue) => requestSearch(searchValue)}
                  onCancelSearch={() => cancelSearch()}
                />
              </div>
            </div>
            <div className={styles.table}>
                <DataGrid
                    getRowId={(row) => row.employeePositionId}
                    rows={rows}
                    columns={headCells}
                    pageSize={20}
                    onSelectionModelChange={handleSelect}
                    checkboxSelection
                />
            </div>
          </div>
          <div className={styles.inactive_table}>
            {/* <InactivePositionsTable 
              activateSuccessAction={activateSuccessAction}
              inactivePositions={inactivePositions}
            /> */}
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
