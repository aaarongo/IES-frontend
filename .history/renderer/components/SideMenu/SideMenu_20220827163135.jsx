import React from 'react';
import styles from './SideMenu.module.scss';

function SideMenu() {
  return (
    <div className={styles.container}>
        <div className={styles.menu}>
            <ul>
                <li>
                    <a class={homeState} href="../HomePage/HomePage">Home</a>
                </li>
                <li>
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