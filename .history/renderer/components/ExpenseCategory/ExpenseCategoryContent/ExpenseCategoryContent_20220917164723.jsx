import React, { useState, useEffect } from 'react';
import ActiveCategoryTable from '../ActiveCategoryTable/ActiveCategoryTable';
import styles from './ExpenseCategoryContent.module.scss';
import Toast from '../../Shared/Toast/Toast';
import Rest from '../../../rest/Rest.tsx';
import { Modal } from '@mui/material';
import MediumButton from '../../Shared/MediumButton/MediumButton';


export default function ExpenseCategoryContent({ activeCategories }) {
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
