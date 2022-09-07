import React, { useState, useEffect } from 'react';
import styles from './IncomeTable.module.scss';
import { Button, Modal } from '@mui/material';
import MediumButton from '../MediumButton/MediumButton';
import SearchBar from 'material-ui-search-bar';
import toast, { ToastContainer } from "../Toast/Toast.jsx";
import Rest from "../../rest/Rest.tsx";
import { DataGrid } from '@mui/x-data-grid';

const INITIAL_URL = "http://localhost:8080/api/v1";

export default function IncomeTable() {
    const rest = new Rest();
    const [incomeData, setIncomeData] = useState("");
    const handleIncomeData = (data) => {
        setIncomeData(data);
    }
    const getIncomeData = () => {
        rest.get(`${INITIAL_URL}/expense`, handleIncomeData)
    }
     //  search
//   const [rows, setRows] = useState([]);
  const [searched, setSearched] = useState("");
  const requestSearch = (searchValue) => {
    const filteredRows = activeEmployees.filter((row) => {
      return String(row.employeeId).includes(searchValue) || row.employeeLastName.toLowerCase().includes(searchValue.toLowerCase()) || row.employeeFirstName.toLowerCase().includes(searchValue.toLowerCase()) || row.employeeTypeName.toLowerCase().includes(searchValue.toLowerCase()) || row.employeeAddress.toLowerCase().includes(searchValue.toLowerCase());
    });
    setRows(filteredRows);
  };
  const cancelSearch = () => {
    setSearched("");
    setRows(activeEmployees);
    // requestSearch(searched);
  };
    //table headers
  const headCells = [
    { id: 'expenseId', label: 'ID', minWidth: 100 },
    { id: 'expenseCategory', label: 'Category', minWidth: 160, align: 'right'},
    { id: 'expenseDate', label: 'Date', minWidth: 160, align: 'right' },
    { id: 'expenseCost', label: 'Cost', minWidth: 160, align: 'right' },
  ]

  const rows = [
    { id: 1, expenseCategory: 'Snow', expenseDate: 'Jon', expenseCost: 35 },
    { id: 2, expenseCategory: 'Lannister', expenseDate: 'Cersei', expenseCost: 42 },
    { id: 3, expenseCategory: 'Lannister', expenseDate: 'Jaime', expenseCost: 45 },
    { id: 4, expenseCategory: 'Stark', expenseDate: 'Arya', expenseCost: 16 },
    { id: 5, expenseCategory: 'Targaryen', expenseDate: 'Daenerys', expenseCost: null },
    { id: 6, expenseCategory: 'Melisandre', expenseDate: null, expenseCost: 150 },
    { id: 7, expenseCategory: 'Clifford', expenseDate: 'Ferrara', expenseCost: 44 },
    { id: 8, expenseCategory: 'Frances', expenseDate: 'Rossini', expenseCost: 36 },
    { id: 9, expenseCategory: 'Roxie', expenseDate: 'Harvey', expenseCost: 65 },
  ];

  useEffect(() => {
    // getIncomeData();
    // setRows(incomeData);
  })

  return (
    <div className={styles.container}>
        <div className={styles.header}>
            <SearchBar 
                placeholder="Search Employee Table"
                value={searched}
                onChange={(searchValue) => requestSearch(searchValue)}
                onCancelSearch={() => cancelSearch()}
            />
        </div>
        <div className={styles.table}>
            <DataGrid
                rows={rows}
                columns={headCells}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    </div>
  )
}
