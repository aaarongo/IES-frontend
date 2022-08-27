import React from 'react';
import BigButton from '../../components/BigButton/BigButton';
import SideMenu from '../../components/SideMenu/SideMenu';
import styles from './ViewIncomePage.module.scss';

function ViewIncomePage() {
  return (
    <div className={styles.section}>
      <SideMenu homeState="active" viewincomeState="" addincomeState="" viewexpenseState="" addexpenseState="" />
      <div className={styles.content}>
          View Income Page
      </div>
    </div>
  )
}

export default ViewIncomePage