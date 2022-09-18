import { DataGrid } from '@mui/x-data-grid';
import React from 'react';
import styles from './ExpenseCategoryContent.module.scss';

export default function ExpenseCategoryContent({ activeCategories }) {
    const headCells = [
        { field: 'employeePositionId', headerName: 'ID', flex: 1, align: 'left' },
        { field: 'employeePositionName', headerName: 'Position Name', flex: 1, align: 'left' }
    ]

  return (
    <div>
        <DataGrid
            row={activeCategories}
        />
    </div>
  )
}
