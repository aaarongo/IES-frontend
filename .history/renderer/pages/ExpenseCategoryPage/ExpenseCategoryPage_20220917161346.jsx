import React from 'react';
import styles from './ExpenseCategoryPage.module.scss';
import ExpenseCategoryContent from '../../components/ExpenseCategory/ExpenseCategoryContent/ExpenseCategoryContent';
import SideMenu from '../../components/Shared/SideMenu/SideMenu';
import Rest from '../../rest/Rest.tsx';
import Toast from '../../components/Shared/Toast/Toast';

export default function PositionsPage() {
  return (
    <div className={styles.section}>
      <SideMenu homeState="" viewincomeState="" viewexpenseState="active" viewexpensecategoryState="" />
      <div className={styles.content}>
        <ExpenseCategoryContent
        />
      </div>
    </div>
  )
}