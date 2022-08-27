import React from 'react';
import styles from './SideMenu.module.scss';

function SideMenu({homeState, incomeState, expenseState}) {
  return (
    <div className={styles.container}>
        <div className={styles.menu}>
            <ul>
                <li>
                    <a class={homeState} href="../HomePage/HomePage">Home</a>
                </li>
                <li>
                    <div className={styles.label}></div>
                    <a class={incomeState} href="../HomePage/HomePage">Income</a>
                </li>
                <li>
                    <a class={expenseState} href="../HomePage/HomePage">Expense</a>
                </li>
            </ul>
            
        </div>
    </div>
  )
}

export default SideMenu