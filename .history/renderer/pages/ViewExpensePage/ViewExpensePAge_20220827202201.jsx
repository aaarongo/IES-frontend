import React from 'react';
import SideMenu from '../../components/SideMenu/SideMenu';
import styles from'./ViewExpensePage.module.scss';

function ViewExpensePage() {
  return (
    <div className={styles.section}>
      <SideMenu homeState="" viewincomeState="" addincomeState="accept" viewexpenseState="" addexpenseState="" />
      <div className={styles.content}>
        Add Income Page
      </div>
    </div>
  )
}

export default ViewExpensePage