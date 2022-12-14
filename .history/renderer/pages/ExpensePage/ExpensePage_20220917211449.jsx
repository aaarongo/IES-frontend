import React, { useState, useEffect } from 'react';
import SideMenu from '../../components/Shared/SideMenu/SideMenu';
import styles from'./ExpensePage.module.scss';
import Toast from '../../components/Shared/Toast/Toast';
import ExpenseContent from '../../components/Expense/ExpenseContent/ExpenseContent';

const INITIAL_URL = "http://localhost:8080/api/v1";

export default function ExpensePage() {
  
  return (
    <div className={styles.section}>
      <Toast />
      <SideMenu homeState="" viewincomeState="" viewexpenseState="active" viewexpensecategoryState="" />
      <div className={styles.content}>
        <ExpenseContent />
      </div>
    </div>
  )
}