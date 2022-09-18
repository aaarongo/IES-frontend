import { DataGrid } from '@mui/x-data-grid';
import SearchBar from 'material-ui-search-bar';
import React from 'react';
import ActiveCategoryTable from '../ActiveCategoryTable/ActiveCategoryTable';
import styles from './ExpenseCategoryContent.module.scss';

export default function ExpenseCategoryContent({ activeCategories }) {
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
  </div>
  )
}