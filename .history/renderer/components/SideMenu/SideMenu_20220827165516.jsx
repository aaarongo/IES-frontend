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
                    <a class={incomeState} href="../HomePage/HomePage">Income</a>
                    <ul>
                        <li>
                        <a class={incomeState} href="../HomePage/HomePage">Income</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a class={expenseState} href="../HomePage/HomePage">Expense</a>
                </li>
            </ul>
            <ul>
  <li>Coffee</li>
  <li>Tea
    <ul>
      <li>Black tea</li>
      <li>Green tea</li>
    </ul>
  </li>
  <li>Milk</li>
</ul>
        </div>
    </div>
  )
}

export default SideMenu