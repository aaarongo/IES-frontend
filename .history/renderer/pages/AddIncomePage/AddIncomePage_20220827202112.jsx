import React from 'react';
import SideMenu from '../../components/SideMenu/SideMenu';
import styles from'./AddIncomePage.module.scss';

function AddIncomePage() {
  return (
    <div className={styles.section}>
      <SideMenu homeState="active" viewincomeState="" addincomeState="" viewexpenseState="" addexpenseState="" />
      <div className={styles.content}>
          Add Income Page
      </div>
    </div>
  )
}

export default AddIncomePage