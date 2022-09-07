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
    const getIncomeData = () => {
        rest.get(`${}`)
    }
     //  search
  const [rows, setRows] = useState([]);
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
        </div>
    </div>
  )
}
