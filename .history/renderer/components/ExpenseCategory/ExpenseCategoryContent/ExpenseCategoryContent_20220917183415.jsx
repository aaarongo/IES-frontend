import React, { useState, useEffect } from 'react';
import ActiveCategoryTable from '../ActiveCategoryTable/ActiveCategoryTable';
import InactiveCategoryTable from '../InactiveCategoryTable/InactiveCategoryTable';
import styles from './ExpenseCategoryContent.module.scss';
import Toast from '../../Shared/Toast/Toast';
import Rest from '../../../rest/Rest.tsx';
import { Modal } from '@mui/material';
import MediumButton from '../../Shared/MediumButton/MediumButton';

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
  //add category modal
  const [openAddModal, setOpenAddModal] = useState(false);
  const handleOpenAddModal = () => { setOpenAddModal(true) };
  const handleCloseAddModal = () => {
      setOpenAddModal(false);
  }

  useEffect(() => {
      getActiveCategories();
  }, [])


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
            <InactiveCategoryTable
            />
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
