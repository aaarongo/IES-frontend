import React, { useEffect, useState } from 'react';
import styles from './AddExpenseModal.module.scss';
import Rest from '../../../rest/Rest.tsx';
import Expense from '../../../model/Expense.tsx';
import { TextField } from '@mui/material';
import Select from 'react-select';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import MediumButton from '../../Shared/MediumButton/MediumButton';
import dateFormat from 'dateformat';

export default function AddExpenseModal({ reload, expenseCategories }) {
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
        </div>
        <div className={styles.group}>
          <div className={styles.group_textfields}>
            <div className={styles.group_textfields_row}>
              <TextField onChange={onChange} name="expenseDescription" label="Expense Description" defaultValue={values.expenseDescription} variant="standard" fullWidth />
            </div>
            <div className={styles.group_textfields_row}>
              <TextField onChange={onChange} name="expenseCost" label="Expense Cost" defaultValue={selectedExpense.expenseCost} variant="standard" fullWidth />
            </div>
          </div>
        </div>
        </div>
        <div className={styles.footer}>
          <button onClick={handleSubmit}>
            <MediumButton label='SUBMIT' />
          </button>
        </div>
      </div>
    </LocalizationProvider>
  )
}
