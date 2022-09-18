import React, { useState, useEffect } from 'react';
import styles from './ExpenseCategoryPage.module.scss';
import ExpenseCategoryContent from '../../components/ExpenseCategory/ExpenseCategoryContent/ExpenseCategoryContent';
import SideMenu from '../../components/Shared/SideMenu/SideMenu';

export default function ExpenseCategoryPage() {

  return (
    <div className={styles.section}>
    <Toast/>
      <SideMenu homeState="" viewincomeState="" viewexpenseState="active" viewexpensecategoryState="" />
      <div className={styles.content}>
        <ExpenseCategoryContent />
      </div>
    </div>
  )
}