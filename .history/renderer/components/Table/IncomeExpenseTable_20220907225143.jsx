import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import styles from './IncomeExpenseTable.module.scss';
import SearchBar from 'material-ui-search-bar';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';

import toast, { ToastContainer } from "../Toast/Toast.jsx";
import Rest from "../../rest/Rest.tsx";

const INITIAL_URL = "http://localhost:8080/api/v1";

function IncomeExpenseTable({type}) {
    const rest = new Rest();

    const [rows, setRows] = useState(originalRows);
    const [searched, setSearched] = useState("");
    const requestSearch = (searchValue) => {
      const filteredRows = originalRows.filter((row) => {
        return row.seller.toLowerCase().includes(searchValue.toLowerCase());
      });
      setRows(filteredRows);
    };
    const cancelSearch = () => {
      setSearched("");
      requestSearch(searched);
    };
    const placeholder = "Search " + type + " Table";


  return (
    <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.search_bar}>
            <SearchBar 
                placeholder={placeholder}
                value={searched}
                onChange={(searchValue) => requestSearch(searchValue)}
                onCancelSearch={() => cancelSearch()}
            />
          </div>
          <div className={styles.add_btn_container}>
            <AddCircleOutlinedIcon sx={{ color:"green" }} />
          </div>
          <div className={styles.print_btn_container}><LocalPrintshopIcon className={styles.print_btn} /></div>
        </div>
        <div className={styles.table}>
            <Table stickyHeader>
                <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Date</TableCell>
                    <TableCell align="right">In-Charge</TableCell>
                    <TableCell align="center"></TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {row.id}
                    </TableCell>
                    <TableCell align="right">{row.amount}</TableCell>
                    <TableCell align="right">{row.date}</TableCell>
                    <TableCell align="right">{row.in_charge}</TableCell>
                    <TableCell align="center"><RemoveCircleRoundedIcon sx={{ color:"red" }} className={styles.delete_btn} /></TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </div>
    </div>
  )
}

export default IncomeExpenseTable