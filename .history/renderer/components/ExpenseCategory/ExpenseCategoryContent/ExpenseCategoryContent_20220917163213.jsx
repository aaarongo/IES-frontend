import { DataGrid } from '@mui/x-data-grid';
import SearchBar from 'material-ui-search-bar';
import React from 'react';
import ActiveCategoryTable from '../ActiveCategoryTable/ActiveCategoryTable';
import styles from './ExpenseCategoryContent.module.scss';

export default function ExpenseCategoryContent({ activeCategories }) {
    const headCells = [
        { field: 'employeePositionId', headerName: 'ID', flex: 1, align: 'left' },
        { field: 'employeePositionName', headerName: 'Position Name', flex: 1, align: 'left' }
    ]

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
