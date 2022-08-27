import React from 'react';
import SideMenu from '../../components/SideMenu/SideMenu';
import styles from'./AddExpensePage.module.scss';

function AddExpensePage() {
  return (
    <div className={styles.section}>
      <SideMenu homeState="" viewincomeState="" viewexpenseState="" addexpenseState="active" />
      <div className={styles.content}>
        Income
      </div>
    </div>
  )
}

export default AddExpensePage