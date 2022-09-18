import { DataGrid } from '@mui/x-data-grid'
import SearchBar from 'material-ui-search-bar'
import React from 'react'

export default function ActiveCategoryTable() {
  return (
    <div className={styles.container}>
    <div className={styles.header}>
      <div className={styles.left}>
        INACTIVE Positions
      </div>
      <div className={styles.right}>
        {/* {showButtons()} */}
      </div>
    </div>
    <div className={styles.sub_header}>
      <div className={styles.left}>
        <SearchBar 
          placeholder="Search Inactive Positions Table"
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
  )
}
