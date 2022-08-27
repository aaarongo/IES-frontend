import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function IncomeTable() {

    function createData(id, amount, date, seller) {
        return { id, amount, date, seller };
      }
      
      const rows = [
        createData(1, 10200.98, "11/11/2022", "Seller 1"),
        createData(2, 25435.987, "01/11/2022", "Seller 1"),
        createData(3, 643563.43, "02/22/2022", "Seller 2"),
        createData(4, 4324.10, "03/11/2022", "Seller 3"),
        createData(5, 54356.10, "04/11/2022", "Seller 4"),
      ];
      

  return (
    <div>
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