import React, { useState, useEffect } from "react";
import styles from './ActivityTracker.module.scss';
import axios from 'axios';

export default function ActivityTracker() {
    const [fetchedData, setFetchedData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const data = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
            setFetchedData(data);
        };
        getData();
    }, []);

    console.log("data fetched: ", fetchedData);

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