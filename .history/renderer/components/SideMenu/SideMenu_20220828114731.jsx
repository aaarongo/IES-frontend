import Link from 'next/link';
import React from 'react';
import styles from './SideMenu.module.scss';

function SideMenu({homeState, viewincomeState, viewexpenseState, addexpenseState}) {
  return (
    <div className={styles.container}>
        <div className={styles.header}>
            <div className={styles.text}>

            </div>
            <div className={styles.logo}>
            <Box
                component="img"
                sx={{
                height: 233,
                width: 350,
                maxHeight: { xs: 233, md: 167 },
                maxWidth: { xs: 350, md: 250 },
                }}
                alt="The house from the offer."
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
            />
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
    </div>
  )
}

export default SideMenu