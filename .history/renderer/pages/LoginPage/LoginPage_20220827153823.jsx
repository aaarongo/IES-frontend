import React from 'react';
import styles from './LoginPage.module.scss';

const LoginPage = () => {
  return (
    <div className={styles.section}>
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.upper}>
                    Login
                </div>
                <div className={styles.lower}>
                    Escobar Income and Expense System
                </div>
            </div>
            <div className={styles.form}>
                <div className={styles.username}>

                </div>
            </div>
        </div>
    </div>
  )
}

export default LoginPage