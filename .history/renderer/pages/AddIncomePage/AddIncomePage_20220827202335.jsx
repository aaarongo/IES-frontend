import React from 'react';
import SideMenu from '../../components/SideMenu/SideMenu';
import styles from'./AddIncomePage.module.scss';

function AddIncomePage() {
  return (
    <div className={styles.section}>
      <SideMenu homeState="" viewincomeState="" addincomeState="accept" viewexpenseState="" addexpenseState="" />
      <div className={styles.content}>
          Welcome username!
      </div>
    </div>
  )
}

export default AddIncomePage