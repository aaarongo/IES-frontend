import Link from 'next/link';
import React from 'react';
import styles from './SideMenu.module.scss';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { stepLabelClasses } from '@mui/material';

function SideMenu({homeState, viewincomeState, viewexpenseState, addexpenseState}) {
  return (
    <div className={styles.container}>
       <div className={stepLabelClasses.inner_container}>
       <div className={styles.header}>
            <div className={styles.text}>
                <div className={styles.upper}>ESCOBAR</div>
                <div className={styles.lower}>Income and Expense Management System</div>
            </div>
        </div>
        <div className={styles.menu}>
            <ul>
                <li className={styles.home}>
                    <Link 
                    href='/HomePage/HomePage'>
                        <div className={[homeState && styles["sidebar_item_selected"], styles["sidebar_item_home"]].join(" ")}>Home</div>
                    </Link>
                </li>
                <li>
                    <div className={styles.label}>Income</div>
                    <Link 
                    href='/ViewIncomePage/ViewIncomePage'>
                        <div className={[viewincomeState && styles["sidebar_item_selected"], styles["sidebar_item"]].join(" ")}>View Income</div>
                    </Link>
                </li>
                <li>
                    <div className={styles.label}>Expense</div>
                    <Link 
                    href='/ViewExpensePage/ViewExpensePage'>
                        <div className={[viewexpenseState && styles["sidebar_item_selected"], styles["sidebar_item"]].join(" ")}>View Expense</div>
                    </Link>
                    <Link 
                    href='/AddExpensePage/AddExpensePage'>
                        <div className={[addexpenseState && styles["sidebar_item_selected"], styles["sidebar_item"]].join(" ")}>Add Expense</div>
                    </Link>
                </li>
            </ul>
            
        </div>
        <div className={styles.footer}>
            <div className={styles.current_user}>First Name</div>
            <div className={styles.logout_btn}><LogoutRoundedIcon /></div>
        </div>
       </div>
    </div>
  )
}

export default SideMenu