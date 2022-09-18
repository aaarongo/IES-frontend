import React from 'react';

export default function ExpenseEditableTable({ reload, expenseEditableData }) {
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
