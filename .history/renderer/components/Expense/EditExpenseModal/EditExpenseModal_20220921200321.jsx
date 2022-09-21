import React, { useEffect, useState } from 'react';
import styles from './EditExpenseModal.module.scss';
import Rest from '../../../rest/Rest.tsx';
import Expense from '../../../model/Expense.tsx';
import { TextField } from '@mui/material';
import Select from 'react-select';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import MediumButton from '../../Shared/MediumButton/MediumButton';
import dateFormat from 'dateformat';
import EditIcon from '@mui/icons-material/Edit';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const INITIAL_URL = "http://localhost:8080/api/v1";

function capitalizeData(data){
  var separateWord = data.toLowerCase().split(' ');
    for (var i = 0; i < separateWord.length; i++) {
        separateWord[i] = separateWord[i].charAt(0).toUpperCase() +
        separateWord[i].substring(1);
    }
    return separateWord.join(' ');
}

export default function EditExpenseModal({ expenseCategories, selectedValues, editSuccessAction }) {
    const rest = new Rest();
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
    //datetime
    const formattedDatetime = '';
    // const datetimeNow = new Date();
    const [datetime, setDatetime] = useState(values.expenseDate);
    const handleDatetimeChange = (newDatetime) => {
      setDatetime(newDatetime);
    };
    //onChange for all inputs
    const onChange = (e) => {
      if(e.target == undefined){
        setValues({...values, [e.key]:e.value})
      }else{
        if(e.target.name == 'expenseCost'){
          console.log('cost')
          setValues({...values, [e.target.name]:Number(e.target.value)})
        }else{
          setValues({...values, [e.target.name]:capitalizeData(e.target.value)})
        }
      }
    }
    //datetime to values
    const setDatetimeValues = () => {
      formattedDatetime = dateFormat(datetime, "yyyy-mm-dd") + "T" + dateFormat(datetime, "HH:MM:ss")
      setValues({...values, expenseDate: formattedDatetime})
    }
    const handleSubmit = () => {
      rest.update(
        `${INITIAL_URL}/expense/update/${values.expenseId}`,
        values,
        editSuccessAction,
        `Successfully edited Expense ID: ${values.expenseId}`
      )
    }
    //edit status
    const [toEdit, setToEdit] = useState(false);
    const isEdit = () => {
      if(toEdit){
          setToEdit(false);
      }else {
          setToEdit(true);
      }
    }

    useEffect(() => {
      setDatetimeValues();
    }, [datetime])

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.header_id}>
            Expense {values.expenseId}
          </div>
          <div className={styles.header_icon}>
            {toEdit ? (
                <HighlightOffIcon className={styles.header_icon_exit} onClick={isEdit} />
            ) : (
                <EditIcon className={styles.header_icon_edit} onClick={isEdit} />
            )}
          </div>
        </div>
          
      </div>
    </LocalizationProvider>
  )
}
