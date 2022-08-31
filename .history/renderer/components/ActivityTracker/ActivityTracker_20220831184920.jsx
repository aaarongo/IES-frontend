import React from 'react';
import styles from './ActivityTracker.module.scss';
import Select from 'react-select';

export default function ActivityTracker() {
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
                <Select
                    value={region}
                    onChange={onchangeSelect}
                    options={options}
                    getOptionValue={(option) => option.value}
                    getOptionLabel={(option) => option.value}
                />
            </div>
        </div>
    </div>
  )
}
