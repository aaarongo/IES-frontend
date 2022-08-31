import React, { useState, useEffect } from "react";
import Creatable from "react-select/creatable";
import AsyncSelect from 'react-select/async';
import loadOptions from "./loadOptions";
import styles from './ActivityTracker.module.scss';

const CreatableAsyncPaginate = withAsyncPaginate(Creatable);

export default function ActivityTracker() {
    const [items, setItems] = useState([]);
    const [inputValue, setValue] = useState('');
    const [selectedValue, setSelectedValue] = useState(null);

    const handleInputChange = value => {
        setValue(value);
    }
    const handleChange = value => {
        setSelectedValue(value);
    }
    const fetchData = () => {
        return loadOptions.get('/users?page=1').then(result => {
            const res = result.data.data;
            return res;
        })
    }

  return (
    <div className={styles.container}>
        <div className={styles.box}>
            <div className={styles.header}>
                Last 30 Days Activities
                <AsyncSelect
                cacheOptions
                defaultOptions
                value={selectedValue}
                getOptionLabel={e => e.first_name + ' ' + e.last_name}
                getOptionValue={e => e.id}
                loadOptions={fetchData}
                onInputChange={handleInputChange}
                onChange={handleChange}
                />
            </div>
            <div className={styles.content}>
                <p>Current value is {JSON.stringify(selectedValue || {}, null, 2)}</p>
            </div>
        </div>
    </div>
  )
}