import React, { useState, useEffect } from 'react';
import styles from './IncomeTable.module.scss';
import { IconButton, Modal, Tooltip } from '@mui/material';
import MediumButton from '../../Shared/MediumButton/MediumButton';
import SearchBar from 'material-ui-search-bar';
import { DataGrid } from '@mui/x-data-grid';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';

import toast, { ToastContainer } from "../../Shared/Toast/Toast";
import Rest from "../../../rest/Rest.tsx";
import Income from '../../../model/Income.tsx';

const INITIAL_URL = "http://localhost:8080/api/v1";

export default function IncomeTable() {
  const rest = new Rest();
  //get income data
  const [incomeData, setIncomeData] = useState([]);
  const handleIncomeData = (data) => {
      setIncomeData(data);
  }
  const getIncomeData = () => {
      rest.getPost(
        `${INITIAL_URL}/income`, 
        ,
        handleIncomeData
      )
  }
  //table headers
  const headCells = [
    { field: 'incomeId', headerName: 'ID', flex: 1, align: 'left' },
    { field: 'incomeCategory', headerName: 'Category', flex: 1, align: 'left' },
    { field: 'incomeDate', headerName: 'Date', flex: 1, align: 'left' },
    { field: 'incomeCost', headerName: 'Cost', flex: 1, align: 'left' },
  ]
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
  const arrDeleted = [];
  const handleToBeDeleted = () => {
    for(let i=0; i< selected.length; i++){
        rows.map((item) => {
            if(item.incomeId == selected[i]){
              console.log(item.incomeId, item.incomeCategory, item.incomeDate)
              arrDeleted.push(item);
            }
        })
    }
  }

  useEffect(() => {
    getIncomeData();
  }, []);

  useEffect(() => {
    setRows(incomeData);
  }, [incomeData]);

  return (
    <div className={styles.container}>
      {console.log(incomeData)}
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
                disableSelectionOnClick
            />
        </div>

        <Modal open={openDeleteModal} onClose={handleCloseDeleteModal} >
            <div className={styles.modal}>
                <div className={styles.header}>
                    Confirm Delete
                </div>
                <div className={styles.content}>
                  {arrDeleted.map((item) => {
                    return (
                      <div key={item.incomeId}>
                        {item.incomeCategory}
                      </div>
                    )
                  })}
                </div>
                <div className={styles.footer}>
                    <MediumButton label="Delete" />
                </div>
            </div>
        </Modal>
    </div>
  )
}
