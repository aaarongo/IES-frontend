import React from 'react';
import styles from './IncomeTable.module.scss';
import MediumButton from '../MediumButton/MediumButton';

export default function IncomeTable() {
  return (
    <div className={styles.container}>
        <div className={styles.header}>
        <div className={styles.left}>
          <SearchBar 
            placeholder="Search Employee Table"
            value={searched}
            onChange={(searchValue) => requestSearch(searchValue)}
            onCancelSearch={() => cancelSearch()}
          />
        </div>
        <div className={styles.right}>
          <Button onClick={handleOpenAddModal}><MediumButton label="add employee" /></Button>
          <Button onClick={handleOpenInactiveModal}><MediumButton label="View Inactive" /></Button>
        </div>
      </div>
    </div>
  )
}
