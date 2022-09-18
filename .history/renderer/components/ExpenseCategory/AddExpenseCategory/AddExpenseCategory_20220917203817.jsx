import { TextField } from '@mui/material';
import React, { useState } from 'react';
import MediumButton from '../../Shared/Buttons/MediumButton/MediumButton';
import styles from './AddExpenseCategory.module.scss';
import Rest from '../../../rest/Rest.tsx';
import ExpenseCategory from '../../../model/ExpenseCategory';

const INITIAL_URL = "http://localhost:8080/api/v1";

export default function AddExpenseCategory({ reload, addSuccessAction }) {
  return (
    <div>

    </div>
  )
}
