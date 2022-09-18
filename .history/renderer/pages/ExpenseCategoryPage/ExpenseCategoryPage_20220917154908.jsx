import React from 'react';
import styles from './ExpenseCategoryPage.module.scss';
// import PositionsContent from '../../components/Positions/PositionsContent/PositionsContent';
import SideMenu from '../../components/Shared/SideMenu/SideMenu';

export default function PositionsPage() {
  return (
    <div className={styles.section}>
      <SideMenu homeState="" viewincomeState="" viewexpenseState="active"/>
      <div className={styles.content}>
        <PositionsContent />
      </div>
    </div>
  )
}