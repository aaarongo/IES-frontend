import React, { useState, useEffect } from 'react';
import styles from './IncomeTable.module.scss';
import { Button, Modal } from '@mui/material';
import MediumButton from '../MediumButton/MediumButton';
import SearchBar from 'material-ui-search-bar';
import toast, { ToastContainer } from "../Toast/Toast.jsx";
import Rest from "../../rest/Rest.tsx";

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
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
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
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    </div>
  )
}
