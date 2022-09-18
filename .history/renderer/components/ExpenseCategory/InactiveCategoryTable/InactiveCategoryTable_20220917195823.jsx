import { DataGrid } from '@mui/x-data-grid'
import SearchBar from 'material-ui-search-bar'
import React, { useState, useEffect } from 'react';
import styles from './InactiveCategoryTable.module.scss';
import { IconButton, Modal, Tooltip } from '@mui/material';
import MediumButton from '../../Shared/MediumButton/MediumButton';

export default function InactiveCategoryTable({ reload, inactiveCategories }) {
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
              <Tooltip title="Edit Employee Position">
                <IconButton disabled onClick={handleOpenEditModal}>
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
        }else if(selected.length == 0){
          return (
            <>
              <Tooltip title="Edit Expense Category">
                <IconButton disabled onClick={handleOpenEditModal}>
                  <MediumButton label="Edit" />
                </IconButton>
              </Tooltip>
              <Tooltip title="Inactivate Expense Categories">
                <IconButton disabled onClick={handleOpenInactivateModal}>
                  <MediumButton label="Inactivate" />
                </IconButton>
              </Tooltip>
            </>
          )
        }
      };
  return (
    <div className={styles.container}>
    <div className={styles.header}>
      <div className={styles.left}>
        Active Categories
      </div>
      <div className={styles.right}>
        {showButtons()}
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
