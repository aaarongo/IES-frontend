import React, { useState } from "react";
import Creatable from "react-select/creatable";
import { withAsyncPaginate } from "react-select-async-paginate";
import loadOptions from "./loadOptions";
import styles from './ActivityTracker.module.scss';

const CreatableAsyncPaginate = withAsyncPaginate(Creatable);

export default function ActivityTracker() {
    const [value, onChange] = useState(null);

  return (
    <div className={styles.container}>
        <div className={styles.box}>
            <div className={styles.header}>
                Last 30 Days Activities
                <CreatableAsyncPaginate
                    value={value}
                    loadOptions={loadOptions}
                    onChange={onChange}
                />
            </div>
            <div className={styles.content}>
                <p>Current value is {JSON.stringify(value.label)}</p>
            </div>
        </div>
    </div>
  )
}

