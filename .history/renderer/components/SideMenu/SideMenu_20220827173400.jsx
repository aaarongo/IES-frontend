import React from 'react';
import styles from './SideMenu.module.scss';

function SideMenu({homeState, incomeState, expenseState}) {
    console.log({homeState});
  return (
    <div className={styles.container}>
        <div className={styles.menu}>
            <ul>
                <li>
                    <a className={styles[{homeState}]} href="../HomePage/HomePage">Home</a>
                </li>
                <li>
                    <div className={styles.label}>Income</div>
                    <a className={styles[{incomeState}]} href="../HomePage/HomePage">View Income</a>
                    <a className={styles[{incomeState}]} href="../HomePage/HomePage">Add Income</a>
                </li>
                <li>
                    <div className={styles.label}>Expense</div>
                    <a className={styles[{expenseState}]} href="../HomePage/HomePage">View Expense</a>
                    <a className={styles[{expenseState}]} href="../HomePage/HomePage">Add Expense</a>
                </li>
            </ul>
            
        </div>
    </div>
  )
}

export default SideMenu