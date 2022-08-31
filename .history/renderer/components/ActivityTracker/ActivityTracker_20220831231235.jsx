import React, { useState, useEffect } from "react";
import Creatable from "react-select/creatable";
import AsyncSelect from 'react-select/async';
import thisOptions from "./loadOptions";
import styles from './ActivityTracker.module.scss';

export default function ActivityTracker() {
    
  return (
    <div className={styles.container}>
        <div className={styles.box}>
            <div className={styles.header}>
                Last 30 Days Activities
            </div>
            <div className={styles.content}>
            </div>
        </div>
    </div>
  )
}