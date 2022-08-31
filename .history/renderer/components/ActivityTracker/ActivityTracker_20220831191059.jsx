import React, { useState } from "react";
import Creatable from "react-select/creatable";
import { withAsyncPaginate } from "react-select-async-paginate";
import loadOptions from "./loadOptions";
import styles from './ActivityTracker.module.scss';

export default function ActivityTracker() {
    const CreatableAsyncPaginate = withAsyncPaginate(Creatable);

    const options = [
        { value: "The Crownlands" },
        { value: "Iron Islands" },
        { value: "The North" },
        { value: "The Reach" },
        { value: "The Riverlands" },
        { value: "The Vale" },
        { value: "The Westerlands" },
        { value: "The Stormlands" }
    ];
   const [region, setRegion] = useState(options[0]);
   const [currentCountry, setCurrentCountry] = useState(null);
   const onchangeSelect = (item) => {
     setCurrentCountry(null);
     setRegion(item);
   };

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

