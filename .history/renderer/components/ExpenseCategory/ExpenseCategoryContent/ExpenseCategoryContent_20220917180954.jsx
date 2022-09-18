import React, { useState, useEffect } from 'react';
import ActiveCategoryTable from '../ActiveCategoryTable/ActiveCategoryTable';
import styles from './ExpenseCategoryContent.module.scss';
import Toast from '../../Shared/Toast/Toast';
import Rest from '../../../rest/Rest.tsx';
import { Modal } from '@mui/material';
import MediumButton from '../../Shared/MediumButton/MediumButton';
import Rest from '../../rest/Rest.tsx';
import Toast from '../../components/Shared/Toast/Toast';

const INITIAL_URL = "http://localhost:8080/api/v1";


export default function ExpenseCategoryContent() {

  const rest = new Rest();
  const [activeCategories, setActiveCategories] = useState([]);
  const handleActiveCategories = (data) => {
      setActiveCategories(data);
  }
  const getActiveCategories = () => {
      rest.get(`${INITIAL_URL}/employee-category/active`, handleActiveCategories)
  }

  useEffect(() => {
      getActiveCategories();
  }, [])
    const rest =new Rest();
    const [openAddModal, setOpenAddModal] = useState(false);
    const handleOpenAddModal = () => { setOpenAddModal(true) };
    const handleCloseAddModal = () => {
        setOpenAddModal(false);
    }

  return (
    <div className={styles.container}>
    <Toast />
      <div className={styles.content}>
        <div className={styles.header}>
          <button onClick={handleOpenAddModal}>
            <MediumButton label="Add Expense Category" />
          </button>
        </div>
        <div className={styles.tables}>
          <div className={styles.active_table}>
            <ActiveCategoryTable
            activeCategories={activeCategories}
            />
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
            {/* <AddPositionForm 
              addSuccessAction={addSuccessAction}
              activePositions={positions} 
              inactivePositions={inactivePositions}
            /> */}
        </div>
        </Modal>
  </div>
  )
}
