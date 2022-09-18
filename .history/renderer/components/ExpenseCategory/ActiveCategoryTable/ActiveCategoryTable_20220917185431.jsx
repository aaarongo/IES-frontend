import { DataGrid } from '@mui/x-data-grid'
import SearchBar from 'material-ui-search-bar'
import React, { useState, useEffect } from 'react';
import styles from './ActiveCategoryTable.module.scss';

export default function ActiveCategoryTable({ activeCategories }) {
  {console.log(activeCategories)}
    //columns
    const headCells = [
      { field: 'expenseCategoryId', headerName: 'ID', flex: 1, align: 'left'},
      { field: 'expenseCategoryName', headerName: 'Category Name', flex: 1, align: 'left'}
    ];
    const [rows, setRows] = useState([]);
    //  search
    const [searched, setSearched] = useState("");
    const requestSearch = (searchValue) => {
      const filteredRows = activeCategories.filter((row) => {
        return String(row.expenseCategoryId).includes(searchValue) || row.expenseCategoryName.toLowerCase().includes(searchValue.toLowerCase());
        });
        setRows(filteredRows);
      };
    const cancelSearch = () => {
      setSearched("");
      requestSearch(searched);
    }
    //selected rows
    const [selected, setSelected] = useState("");
    const handleSelect = (ids) => {
      setSelected(ids);
    }
    const [selectedValues, setSelectedValues] = useState([]);
    const handleSelectedValues = () => {
      const arr = [];
      for(let i=0; i < selected.length; i++){
        rows.map((item) => {
          if(item.expenseCategoryId == selected[i]){
            arr.push(item);
          }
        })
      }
      setSelectedValues(arr);
    }
    //get shown buttons
    function showButtons() {
      if(selected.length == 1 ){
        return (
          <>
            <Tooltip title="Edit Employee Position">
              <IconButton onClick={handleOpenEditModal}>
                <MediumButton label="Edit" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Inactivate Employee Position/s">
              <IconButton onClick={handleOpenInactivateModal}>
                <MediumButton label="Inactivate" />
              </IconButton>
            </Tooltip>
          </>
        )
      }else if(selected.length > 1){
        return (
          <>
            <Tooltip title="Inactivate Employee Position/s">
              <IconButton onClick={handleOpenInactivateModal}>
                <MediumButton label="Inactivate" />
              </IconButton>
            </Tooltip>
          </>
        )
      }else if(selected.length == 0){
        return (
          <>
            <Tooltip title="Edit Employee Position">
              <IconButton onClick={handleOpenEditModal}>
                <MediumButton label="Edit" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Inactivate Employee Position/s">
              <IconButton onClick={handleOpenInactivateModal}>
                <MediumButton label="Inactivate" />
              </IconButton>
            </Tooltip>
          </>
        )
      }
    };

    useEffect(() => {
      setRows(activeCategories)
    }, [activeCategories])

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
          placeholder="Search Active Categories Table"
          value={searched}
          onChange={(searchValue) => requestSearch(searchValue)}
          onCancelSearch={() => cancelSearch()}
        />
      </div>
    </div>
    <div className={styles.table}>
      <DataGrid
        getRowId={(row) => row.expenseCategoryId}
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
