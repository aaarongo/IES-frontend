import React, { useState, useEffect } from 'react';
import styles from './IncomeTable.module.scss';
import { IconButton, Modal, Tooltip } from '@mui/material';
import MediumButton from '../MediumButton/MediumButton';
import SearchBar from 'material-ui-search-bar';
import { DataGrid } from '@mui/x-data-grid';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';

import toast, { ToastContainer } from "../Toast/Toast.jsx";
import Rest from "../../rest/Rest.tsx";
import Income from '../../model/Income.tsx';

const INITIAL_URL = "http://localhost:8080/api/v1";

export default function IncomeTable() {
    //income model
    const dateNow = new Date();
    const [income, setIncome] = useState (
      new Income(1, "", dateNow, 1)
    );
     //table headers
  const headCells = [
    { field: 'incomeId', headerName: 'ID', flex: 1, align: 'left' },
    { field: 'incomeCategory', headerName: 'Category', flex: 1, align: 'left' },
    { field: 'incomeDate', headerName: 'Date', flex: 1, align: 'left' },
    { field: 'incomeCost', headerName: 'Cost', flex: 1, align: 'left' },
  ]

    const allRows = [
    { id: 1, incomeId: 1, incomeCategory: 'Snow', incomeDate: 'Jon', incomeCost: 35 },
    { id: 2, incomeId: 2, incomeCategory: 'Lannister', incomeDate: 'Cersei', incomeCost: 42 },
    { id: 3, incomeId: 3, incomeCategory: 'Lannister', incomeDate: 'Jaime', incomeCost: 45 },
    { id: 4, incomeId: 4, incomeCategory: 'Stark', incomeDate: 'Arya', incomeCost: 16 },
    { id: 5, incomeId: 5, incomeCategory: 'Targaryen', incomeDate: 'Daenerys', incomeCost: null },
    { id: 6, incomeId: 6, incomeCategory: 'Melisandre', incomeDate: null, incomeCost: 150 },
    { id: 7, incomeId: 7, incomeCategory: 'Clifford', incomeDate: 'Ferrara', incomeCost: 44 },
    { id: 8, incomeId: 8, incomeCategory: 'Frances', incomeDate: 'Rossini', incomeCost: 36 },
    { id: 9, incomeId: 9, incomeCategory: 'Roxie', incomeDate: 'Harvey', incomeCost: 65 },
  ];
    const rest = new Rest();
    const [incomeData, setIncomeData] = useState("");
    const handleIncomeData = (data) => {
        setIncomeData(data);
    }
    const getIncomeData = () => {
        rest.get(`${INITIAL_URL}/income`, handleIncomeData)
    }
     //  search
  const [rows, setRows] = useState([]);
  const [searched, setSearched] = useState("");
  const requestSearch = (searchValue) => {
    const filteredRows = allRows.filter((row) => {
      return String(row.incomeId).includes(searchValue) || row.incomeCategory.toLowerCase().includes(searchValue.toLowerCase()) || String(row.incomeCost).includes(searchValue);
    });
    setRows(filteredRows);
  };
  const cancelSearch = () => {
    setSearched("");
    setRows(allRows);
  };
   //set shown 
   const setShownRows = () => {
    if(rows.length == 0){
      setRows(allRows);
    }
  };
  //handle select
  const [selected, setSelected] = useState("");
  const handleSelect = (ids) => {
    setSelected(ids);
  }
  //modal
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const handleOpenDeleteModal = () => { setOpenDeleteModal(true) };
  const handleCloseDeleteModal = () => { setOpenDeleteModal(false) };
  //show delete button on click
  function showButtons() {
    if(selected.length > 0 ){
      return (
        <>
        <Tooltip title="Inactivate Employee/s">
          <IconButton onClick={handleOpenDeleteModal}>
            <MediumButton label="Delete" />
          </IconButton>
        </Tooltip>
        </>
      )
    } 
  }
  //handle to be deletec
  const handleToBeDeleted = () => {
    // const arrDeleted = [];
    // for(let i=0; i< selected.length; i++){
    //     rows.map((item) => {
    //         if(item.incomeId == selected[i]){
    //           console.log(item.incomeId, item.incomeCategory, item.incomeDate)
    //           arrDeleted.push([
    //             item.incomeId,
    //             item.incomeCategory,
    //             item.incomeDate
    //           ])
    //         }
    //     })
    // }

  }

  useEffect(() => {
    // getIncomeData();
    setShownRows();
  })

  return (
    <div className={styles.container}>
        <div className={styles.header}>
            <div className={styles.left}>
                <SearchBar 
                    placeholder="Search Employee Table"
                    value={searched}
                    onChange={(searchValue) => requestSearch(searchValue)}
                    onCancelSearch={() => cancelSearch()}
                />
                <div className={styles.print_btn}>
                    <LocalPrintshopIcon />
                </div>
            </div>
            <div className={styles.right}>
            {showButtons()}
            </div>
        </div>
        <div className={styles.table}>
            <DataGrid
                rows={rows}
                columns={headCells}
                pageSize={10}
                onSelectionModelChange={handleSelect}
                checkboxSelection
            />
        </div>

        <Modal open={openDeleteModal} onClose={handleCloseDeleteModal} >
            <div className={styles.modal}>
                <div className={styles.header}>
                    Confirm Delete
                </div>
                <div className={styles.content}>
                  {handleToBeDeleted()}
                </div>
                <div className={styles.footer}>
                    <MediumButton label="Delete" />
                </div>
            </div>
        </Modal>
    </div>
  )
}
