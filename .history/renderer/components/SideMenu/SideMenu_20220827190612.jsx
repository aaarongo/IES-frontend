import Link from 'next/link';
import React from 'react';
import styles from './SideMenu.module.scss';

function SideMenu({homeState, viewincomeState, addincomeState, viewexpenseState, addexpenseState}) {
  return (
    <div className={styles.container}>
        <div className={styles.menu}>

            <ul>
                <li className={styles.home}>
                    <Link >
                        <div className={styles[homeState]}>Home</div>
                    </Link>
                </li>
                <li>
                    <div className={styles.label}>Income</div>
                    <div className={styles[viewincomeState]} link="../ViewIncomePage/ViewIncomePage">View Income</div>
                    <div className={styles[addincomeState]} link="../AddIncomePage/AddIncomePage">Add Income</div>
                </li>
                <li>
                    <div className={styles.label}>Expense</div>
                    <div className={styles[viewexpenseState]} link="../ViewExpensePage/ViewExpensePage">View Expense</div>
                    <div className={styles[addexpenseState]} link="../AddExpensePage/AddExpensePage">Add Expense</div>
                </li>
            </ul>
            
        </div>
    </div>
  )
}

export default SideMenu