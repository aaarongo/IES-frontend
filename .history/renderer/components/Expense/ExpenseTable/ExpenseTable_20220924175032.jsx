import React, { useState, useEffect } from 'react';
import styles from './ExpenseTable.module.scss';
import { IconButton, Modal, Tooltip } from '@mui/material';
import MediumButton from '../../Shared/MediumButton/MediumButton';
import SearchBar from 'material-ui-search-bar';
import { DataGrid } from '@mui/x-data-grid';
import ExpenseMoreInfo from '../ExpenseMoreInfo/ExpenseMoreInfo';
import InfoIcon from '@mui/icons-material/Info';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import { printPdf } from '../../../print/printFunctions';

export default function ExpenseTable({ expenseData }) {
  //for pdf
  const title = 'Escobar - Expense Stock-In Data';
  const pdfColumns = [
    { header:"ID", dataKey: 'employeeId' },
    { header:"First", dataKey: 'employeeFirstName' },
    { header:"Last", dataKey: 'employeeLastName' },
    { header:"Address", dataKey: 'employeeAddress' },
    { header:"Contact", dataKey: 'employeeContactNumber' },
    { header:"Date Employed", dataKey: 'dateEmployed' },
    { header:"Posiiton", dataKey: 'employeePositionName' },
    { header:"Superior", dataKey: 'superiorEmployeeName' }
  ]
  const [pdfRows, setPdfRows] = useState([]);
  //
  //columns
  const headCells = [
    { field: 'transactionDate', headerName: 'Transaction Date', flex: 2, align: 'left'},
    { field: 'supplyName', headerName: 'Supply Name', flex:1, align: 'left'},
    { field: 'expenseCost', headerName: 'Cost', flex: 1, align: 'left'},
    { field: 'icon', headerName: '', flex: 1, align: 'center', renderCell: () => (
      <Tooltip title='View Information'>
        <InfoIcon className={styles.info_icon} onClick={handleOpenMoreInfoModal} />
      </Tooltip>
    ) }
  ];
  const [rows, setRows] = useState([]);
  //  search
  const [searched, setSearched] = useState("");
  const requestSearch = (searchValue) => {
    const filteredRows = expenseData.filter((row) => {
      return String(row.expenseId).includes(searchValue) || row.expenseName.toLowerCase().includes(searchValue.toLowerCase());
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
    // openAfterSelect();
  }
  const [selectedValues, setSelectedValues] = useState([]);
  const handleSelectedValues = () => {
    const arr = [];
    for(let i=0; i < selected.length; i++){
      rows.map((item) => {
        if(item.transactionId == selected[i]){
          arr.push(item);
        }
      })
    }
    setSelectedValues(arr);
  }
  //more info modal
  const [openMoreInfoModal, setOpenMoreInfoModal] = useState(false);
  const handleOpenMoreInfoModal = () => {
    handleSelectedValues(); 
    setOpenMoreInfoModal(true); 
  };
  const openAfterSelect = () => {
    handleOpenMoreInfoModal();
  }
  const handleCloseMoreInfoModal = () => { setOpenMoreInfoModal(false); };
  //get shown buttons
  // function showButtons() {
  //   if(selected.length == 1 ){
  //     return (
  //       <>
  //         <Tooltip title="More Expense Information">
  //           <IconButton onClick={handleOpenMoreInfoModal}>
  //             <MediumButton label="More" />
  //           </IconButton>
  //         </Tooltip>
  //       </>
  //     )
  //   }else if(selected.length == 0 || selected.length > 1){
  //     return (
  //       <>
  //         <Tooltip title="More Expense Information">
  //           <IconButton disabled onClick={handleOpenMoreInfoModal}>
  //             <MediumButton label="More" />
  //           </IconButton>
  //         </Tooltip>
  //       </>
  //     )
  //   }
  // };

  useEffect(() => {
    setRows(expenseData);
  }, [expenseData])

  useEffect(() => {
    handleSelectedValues();
  }, [selected])

  return (
    <div className={styles.container}>
    <div className={styles.header}>
      <div className={styles.left}>
        Expense Stock-In
        <Tooltip title='Print Active Employee Data'>
          <LocalPrintshopIcon className={styles.print_btn} onClick={() => printPdf(title, pdfColumns, pdfRows)}/>
        </Tooltip>
      </div>
      <div className={styles.right}>
        {/* {showButtons()} */}
      </div>
    </div>
    <div className={styles.sub_header}>
      <div className={styles.left}>
        <SearchBar 
          placeholder="Search Expense Transactions Table"
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
        hideFooterSelectedRowCount
        // checkboxSelection
      />
    </div>
    <Modal open={openMoreInfoModal} onClose={handleCloseMoreInfoModal}>
      <div className={styles.modal}>
        <ExpenseMoreInfo
          selectedValues={selectedValues}
        />
      </div>
    </Modal>
    </div>
  )
}
