import React from 'react';
import styles from './SideMenu.module.scss';

function SideMenu({homeState, viewincomeState, addincomeState, viewexpenseState, addexpenseState}) {
  return (
    <div className={styles.container}>
        <div className={styles.menu}>
            <ul>
                <li className={styles.home}>
                    <a className={styles[homeState]} href="../HomePage/HomePage">Home</a>
                </li>
                <li>
                    <div className={styles.label}>Income</div>
                    <a className={styles[viewincomeState]} href="../ViewIncomePage/ViewIncomePage">View Income</a>
                    <a className={styles[addincomeState]} href="../AddIncomePage/AddIncomePage">Add Income</a>
                </li>
                <li>
                    <div className={styles.label}>Expense</div>
                    <a className={styles[viewexpenseState]} href="../ViewExpensePage/ViewExpensePage">View Expense</a>
                    <a className={styles[addexpenseState]} href="../AddExpensePage/AddExpensePage">Add Expense</a>
                </li>
            </ul>
            
        </div>
    </div>
  )
}

export default SideMenu