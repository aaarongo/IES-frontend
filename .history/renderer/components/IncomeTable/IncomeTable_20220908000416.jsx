import React, { useState, useEffect } from 'react';
import styles from './IncomeTable.module.scss';
import { Button, Modal } from '@mui/material';
import MediumButton from '../MediumButton/MediumButton';
import SearchBar from 'material-ui-search-bar';
import toast, { ToastContainer } from "../Toast/Toast.jsx";
import Rest from "../../rest/Rest.tsx";
import { DataGrid } from '@mui/x-data-grid';
import PropTypes from 'prop-types';

const INITIAL_URL = "http://localhost:8080/api/v1";

export default function IncomeTable() {
    const EnhancedTableToolbar = (props) => {
        const { numSelected } = props;
      
        return (
          <Toolbar
            sx={{
              pl: { sm: 2 },
              pr: { xs: 1, sm: 1 }
              // ...(numSelected > 0 && {
              //   bgcolor: (theme) =>
              //     alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
              // }),
            }}
          >
            {numSelected > 0 ? (
              <Typography
                sx={{ flex: '1 1 100%' }}
                color="inherit"
                variant="subtitle1"
                component="div"
              >
                {numSelected} selected
              </Typography>
            ) : (
              <Typography
                sx={{ flex: '1 1 100%' }}
                variant="h6"
                id="tableTitle"
                component="div"
              >
                Nutrition
              </Typography>
            )}
          </Toolbar>
        );
      };
      
      EnhancedTableToolbar.propTypes = {
        numSelected: PropTypes.number.isRequired,
      };
    
     //table headers
  const headCells = [
    { field: 'expenseId', headerName: 'ID', minWidth: 100 },
    { field: 'expenseCategory', headerName: 'Category', minWidth: 160, align: 'right'},
    { field: 'expenseDate', headerName: 'Date', minWidth: 160, align: 'right' },
    { field: 'expenseCost', headerName: 'Cost', minWidth: 160, align: 'right' },
  ]

    const allRows = [
    { id: 1, expenseId: 1, expenseCategory: 'Snow', expenseDate: 'Jon', expenseCost: 35 },
    { id: 2, expenseId: 2, expenseCategory: 'Lannister', expenseDate: 'Cersei', expenseCost: 42 },
    { id: 3, expenseId: 3, expenseCategory: 'Lannister', expenseDate: 'Jaime', expenseCost: 45 },
    { id: 4, expenseId: 4, expenseCategory: 'Stark', expenseDate: 'Arya', expenseCost: 16 },
    { id: 5, expenseId: 5, expenseCategory: 'Targaryen', expenseDate: 'Daenerys', expenseCost: null },
    { id: 6, expenseId: 6, expenseCategory: 'Melisandre', expenseDate: null, expenseCost: 150 },
    { id: 7, expenseId: 7, expenseCategory: 'Clifford', expenseDate: 'Ferrara', expenseCost: 44 },
    { id: 8, expenseId: 8, expenseCategory: 'Frances', expenseDate: 'Rossini', expenseCost: 36 },
    { id: 9, expenseId: 9, expenseCategory: 'Roxie', expenseDate: 'Harvey', expenseCost: 65 },
  ];
    const rest = new Rest();
    const [incomeData, setIncomeData] = useState("");
    const handleIncomeData = (data) => {
        setIncomeData(data);
    }
    const getIncomeData = () => {
        rest.get(`${INITIAL_URL}/expense`, handleIncomeData)
    }
     //  search
  const [rows, setRows] = useState([]);
  const [searched, setSearched] = useState("");
  const requestSearch = (searchValue) => {
    const filteredRows = allRows.filter((row) => {
      return String(row.expenseId).includes(searchValue) || row.expenseCategory.toLowerCase().includes(searchValue.toLowerCase()) || String(row.expenseCost).includes(searchValue);
    });
    setRows(filteredRows);
  };
  const cancelSearch = () => {
    setSearched("");
    setRows(allRows);
    // requestSearch(searched);
  };
   //set shown 
   const setShownRows = () => {
    if(rows.length == 0){
      setRows(allRows);
    }
  };
  //handle select
  const handleSelect = (ids) => {
    console.log(ids)
  }
   
  useEffect(() => {
    // getIncomeData();
    setShownRows();
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
        <div className={styles.toolbar}>
          <EnhancedTableToolbar numSelected={selected.length} />
          <div className={styles.buttons_container}>
          {showButtons()}
          </div>
        </div>
        <div className={styles.table}>
            <DataGrid
                rows={rows}
                columns={headCells}
                pageSize={10}
                onSelectionModelChange={handleSelect}
                // rowsPerPageOptions={[5, 10]}
                checkboxSelection
            />
        </div>
    </div>
  )
}
