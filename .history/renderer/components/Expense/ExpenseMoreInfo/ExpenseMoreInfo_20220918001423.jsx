import React, { useState, useEffect } from 'react';
import styles from './ExpenseMoreInfo.module.scss';

export default function ExpenseMoreInfo({ selectedValues }) {
    const [values, setValues] = useState([])
    const getValues = () => {
        selectedValues.map((item) => {
            setValues({
                id: item.transactionId,
                transactionDate: item.transactionDate,
                supplyName: item.supplyName,
                expenseCost: item.expenseCost
            })
        })
    }

    useEffect(() => {
        getValues();
    }, []);

  return (
    <div className={styles.container}>
        <div className={styles.header}>
            Employee {values.id}
        </div>
        <div className={styles.content_outer}>
            <div className={styles.content_name}>
                {values.fullName}
            </div>
            <div className={styles.content_inner}>
                <div className={styles.content_inner_left}>
                    <div className={styles.content_inner_label}>
                        Personal Details
                    </div>
                    <div className={styles.content_inner_row}>
                        <Tooltip title="Employee Address">
                            <HouseIcon/>
                        </Tooltip>
                        {values.address}
                    </div>
                    <div className={styles.content_inner_row}>
                        <Tooltip title="Employee Contact Number">
                            <LocalPhoneIcon/>
                        </Tooltip>
                        {values.contact}
                    </div>
                </div>
                <div className={styles.content_inner_right}>
                    <div className={styles.content_inner_label}>
                        Work Details
                    </div>
                    <div className={styles.content_inner_row}>
                        <Tooltip title="Employee Position">
                            <WorkIcon/>
                        </Tooltip>
                        {values.employeePositionName}
                    </div>
                    <div className={styles.content_inner_row}>
                        <Tooltip title="Employee Type">
                            <WorkHistoryIcon/>
                        </Tooltip>
                        {values.employeeTypeName}
                    </div>
                    <div className={styles.content_inner_row}>
                        <Tooltip title="Superior Employee">
                            <BadgeIcon/>
                        </Tooltip>
                        {values.superiorEmployeeName}
                    </div>
                    <div className={styles.content_inner_row}>
                        <Tooltip title="Date Employed">
                            <HowToRegIcon/>
                        </Tooltip>
                        {values.dateEmployed}
                    </div>
                </div>
            </div>
        </div>  
    </div> 
  )
}
