import React, { useState, useEffect } from 'react';
import styles from './ExpenseCategoryPage.module.scss';
import ExpenseCategoryContent from '../../components/ExpenseCategory/ExpenseCategoryContent/ExpenseCategoryContent';
import SideMenu from '../../components/Shared/SideMenu/SideMenu';
import Rest from '../../rest/Rest.tsx';
import Toast from '../../components/Shared/Toast/Toast';

export default function ExpenseCategoryPage() {
    const rest = new Rest();
    const [activeCategories, setActiveCategories] = useState([]);
    const handleActiveCategories = (data) => {
        setActiveCategories(data);
    }
    const getActiveCategories = () => {

    }

    useEffect(() => {
        getActiveCategories();
    }, [])

  return (
    <div className={styles.section}>
    <Toast/>
      <SideMenu homeState="" viewincomeState="" viewexpenseState="active" viewexpensecategoryState="" />
      <div className={styles.content}>
        <ExpenseCategoryContent
        />
      </div>
    </div>
  )
}