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
        </div>
      </div>
    </div>
  )
}

export default HomePage