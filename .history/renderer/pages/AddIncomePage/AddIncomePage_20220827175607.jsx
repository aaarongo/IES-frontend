import React from 'react';
import SideMenu from '../../components/SideMenu/SideMenu';
import styles from'./AddIncomePage.module.scss';

function AddIncomePage() {
  return (
    <div className={styles.section}>
        <div className={styles.left}>
            <SideMenu homeState="" viewincomeState="" addincomeState="active" viewexpenseState="" addexpenseState="" /></div>
        <div className={styles.right}>
            View Income Page
        </div>
    </div>
  )
}

export default AddIncomePage