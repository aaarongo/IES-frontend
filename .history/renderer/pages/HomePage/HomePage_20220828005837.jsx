import React from 'react';
import BigButton from '../../components/BigButton/BigButton';
import SideMenu from '../../components/SideMenu/SideMenu';
import TitleBar from '../../components/TitleBar/TitleBar';
import styles from './HomePage.module.scss';

function HomePage() {
  return (
    <div>
      <div className={styles.section}>
        <SideMenu homeState="active" viewincomeState="" addincomeState="" viewexpenseState="" addexpenseState="" />
        <div className={styles.content}>
          <div className={styles.header}>
            Report for the month of
          </div>
          <div className={styles.bar_chart}>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage