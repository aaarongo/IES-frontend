import React from 'react';
import styles from './ExpenseEditableTable.module.scss';

export default function ExpenseEditableTable({ reload, expenseEditableData }) {
    //get shown buttons
    function showButtons() {
      if(selected.length == 1 ){
        return (
          <>
            <Tooltip title="More Expense Information">
              <IconButton onClick={handleOpenInactivateModal}>
                <MediumButton label="More Info" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Edit Expense">
              <IconButton onClick={handleOpenEditModal}>
                <MediumButton label="Edit" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Inactivate Expense">
              <IconButton onClick={handleOpenInactivateModal}>
                <MediumButton label="Inactivate" />
              </IconButton>
            </Tooltip>
          </>
        )
      }else if(selected.length > 1){
        return (
          <>
            <Tooltip title="More Expense Information">
              <IconButton disabled onClick={handleOpenInactivateModal}>
                <MediumButton label="More Info" />
              </IconButton>
            </Tooltip>
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
            <Tooltip title="More Expense Information">
              <IconButton disabled onClick={handleOpenInactivateModal}>
                <MediumButton label="More Info" />
              </IconButton>
            </Tooltip>
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
        Expense
      </div>
      <div className={styles.right}>
        {showButtons()}
      </div>
    </div>
    <div className={styles.sub_header}>
      <div className={styles.left}>
        <SearchBar 
          placeholder="Search Expense Table"
          value={searched}
          onChange={(searchValue) => requestSearch(searchValue)}
          onCancelSearch={() => cancelSearch()}
        />
      </div>
    </div>
    <div className={styles.table}>
      <DataGrid
        getRowId={(row) => row.transactionId}
        rows={rows}
        columns={headCells}
        pageSize={20}
        onSelectionModelChange={handleSelect}
        checkboxSelection
      />
    </div>
    {/* <Modal open={openEditModal} onClose={handleCloseEditModal}>
      <div className={styles.modal}>
        <EditExpenseCategory 
        editSuccessAction={editSuccessAction}
        expenseCategoryId={selectedValues.map((item) => item.expenseCategoryId)}
        expenseCategoryName={selectedValues.map((item) => item.expenseCategoryName)}
        />
      </div>
    </Modal> */}
    {/* <Modal open={openInactivateModal} onClose={handleCloseInactivateModal}>
      <div className={styles.modal}>
        <InactivateExpenseCategory
        inactivateSuccessAction={inactivateSuccessAction}
        selectedValues={selectedValues}
        />
      </div>
    </Modal> */}
    </div>
  )
}
