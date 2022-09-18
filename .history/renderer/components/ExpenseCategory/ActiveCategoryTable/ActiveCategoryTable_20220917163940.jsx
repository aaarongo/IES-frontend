import { DataGrid } from '@mui/x-data-grid'
import SearchBar from 'material-ui-search-bar'
import React from 'react';
import styles from './ActiveCategoryTable.module.scss';

export default function ActiveCategoryTable({ activeCategories }) {
    const rest = new Rest();
    //columns
    const headCells = [
      { field: 'expenseCategoryId', headerName: 'ID', flex: 1, align: 'left'},
      { field: 'expenseCategoryName', headerName: 'Position Name', flex: 1, align: 'left'}
    ];
    const [rows, setRows] = useState([]);
    //  search
    const [searched, setSearched] = useState("");
    const requestSearch = (searchValue) => {
      const filteredRows = activeCategories.filter((row) => {
        return String(row.employeePositionId).includes(searchValue) || row.employeePositionName.toLowerCase().includes(searchValue.toLowerCase());
        });
        setRows(filteredRows);
      };
    const cancelSearch = () => {
      setSearched("");
      requestSearch(searched);
    }

  return (
    <div className={styles.container}>
    <div className={styles.header}>
      <div className={styles.left}>
        Active Categories
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
