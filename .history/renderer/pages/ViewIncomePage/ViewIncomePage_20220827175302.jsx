import React from 'react';
import SideMenu from '../../components/SideMenu/SideMenu';
import styles from'./ViewIncomePage/module.scss';

function ViewIncomePage() {
  return (
    <div className={styles.section}>
    <div className={styles.left}>
        <SideMenu homeState="" viewincomeState="active" addincomeState="" viewexpenseState="" addexpenseState="" /></div>
    <div className={styles.right}>
        Welcome username!
    </div>
</div>
  )
}

export default ViewIncomePage