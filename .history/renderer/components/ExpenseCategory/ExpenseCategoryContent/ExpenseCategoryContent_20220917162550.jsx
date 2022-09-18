import { DataGrid } from '@mui/x-data-grid';
import React from 'react';
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
