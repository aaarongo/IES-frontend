import { TextField } from '@mui/material';
import React from 'react';
import BigButton from '../../components/Shared/BigButton';
import TitleBar from '../../components/Shared/TitleBar/TitleBar';
import styles from './LoginPage.module.scss';

const LoginPage = () => {
  return (
    <div>
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
                <div className={styles.content}>
                    <TextField id="username" label="Username" variant="standard" fullWidth />
                    <TextField id="password" label="Password" variant="standard" fullWidth />
                </div>
                <div className={styles.btn_container}><BigButton label="SUBMIT" link="../HomePage/HomePage"/></div>
            </div>
        </div>
    </div>
  )
}

export default LoginPage