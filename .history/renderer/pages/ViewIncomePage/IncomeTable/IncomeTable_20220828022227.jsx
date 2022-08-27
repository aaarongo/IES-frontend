import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import styles from './IncomeTable.module.scss';
import SearchBar from 'material-ui-search-bar';

function createData(id, amount, date, seller) {
    return { id, amount, date, seller };
  }
  
const originalRows = [
    createData(1, 10200.98, "11/11/2022", "Seller 1"),
    createData(2, 25435.987, "01/11/2022", "Seller 1"),
    createData(3, 643563.43, "02/22/2022", "Seller 2"),
    createData(4, 4324.10, "03/11/2022", "Seller 3"),
    createData(5, 54356.10, "04/11/2022", "Seller 4"),
];

function IncomeTable() {

    const [rows, setRows] = useState(originalRows);
    const [searched, setSearched] = useState("");
    const requestSearch = (searchValue) => {
      const filteredRows = originalRows.filter((row) => {
        return row.attendance_id.toLowerCase().includes(searchValue.toLowerCase());
      });
      setRows(filteredRows);
      
    };
    const cancelSearch = () => {
      setSearched("");
      requestSearch(searched);
    };
      
  return (
    <div className={styles.table}>
        <SearchBar 
        />
        <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">In-Charge</TableCell>
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
              <TableCell align="right">{row.seller}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default IncomeTable