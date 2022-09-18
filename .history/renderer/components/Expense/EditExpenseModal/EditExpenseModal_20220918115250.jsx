import React, { useState } from 'react';
import styles from './EditExpenseModal.module.scss';
import Rest from '../../../rest/Rest.tsx';
import Expense from '../../../model/Expense.tsx';
import { TextField } from '@mui/material';
import Select from 'react-select';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

export default function EditExpenseModal({ reload, expenseCategories, selectedValues }) {
    const rest = new Rest();
    //datetime
    const datetimeNow = new Date();
    const [datetime, setDatetime] = useState(datetimeNow);
    const handleDatetimeChange = (newDatetime) => {
      setDatetime(newDatetime);
    };
    //selected
    const selectedExpense = selectedValues[0];
    const [values, setValues] = useState(
        new Expense(
            selectedExpense.expenseId,
            selectedExpense.expenseCategoryName,
            selectedExpense.expenseDescription,
            selectedExpense.expenseDate,
            selectedExpense.expenseCost
        )
    );
    //onChange for all inputs
    const onChange = (e) => {
        if(e.target == undefined){
        setValues({...values, [e.key]:e.value})
        }else{
        setValues({...values, [e.target.name]:capitalizeData(e.target.value)})
        }
    }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className={styles.container}>
        <div className={styles.header}>
            Edit Expense ID: {values.expenseId}
        </div>
        <div className={styles.content}>
        <div className={styles.group}>
          <div className={styles.group_textfields}>
            <div className={styles.group_textfields_row}>
            <div className={styles.group_textfields_select}>
                <div className={styles.group_textfields_select_label}>Position</div> 
                <Select
                  placeholder={selectedExpense.expenseCategoryName}
                  defaultValue={selectedExpense.expenseCategoryName}
                  options={expenseCategories.map((item) => {
                    return {
                      key: 'expenseCategoryName',
                      value: item.expenseCategoryName,
                      label: item.expenseCategoryName
                    }
                  })}
                  onChange={onChange}
                />
              </div>
            </div>
            <div className={styles.group_textfields_row}>
              <DateTimePicker
                label="Expense Transaction Datetime"
                value={datetime}
                onChange={handleDatetimeChange}
                renderInput={(params) => <TextField {...params} />}
              />
            </div>
          </div>
          <div className={styles.group_textfields}>
            <div className={styles.group_textfields_row}>
            <TextField onChange={onChange} name="expenseDescription" label="Description" defaultValue={values.expenseDescription} variant="standard" fullWidth />
            </div>
            <div className={styles.group_textfields_row}>
              <TextField onChange={onChange} name="expenseCost" label="Expense Cost" defaultValue={selectedExpense.expenseCost} variant="standard" fullWidth />
            </div>
          </div>
        </div>
        </div>
      </div>
    </LocalizationProvider>
  )
}
