import React from 'react';
import styles from './ActivityTracker.module.scss';

export default function ActivityTracker() {
  return (
    <div className={styles.container}>
        <div className={styles.box}>
            <div className={styles.header}>
                Last 30 Days Activities
            </div>
        </div>
    </div>
  )
}
