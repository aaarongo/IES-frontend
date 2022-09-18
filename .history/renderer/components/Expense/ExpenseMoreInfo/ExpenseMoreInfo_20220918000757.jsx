import React, { useState, useEffect } from 'react';
import styles from './ExpenseMoreInfo.module.scss';

export default function ExpenseMoreInfo({ selectedValues }) {
    console.log(selectedValues)
    // const [values, setValues] = useState([])
    // const getValues = () => {
    //     selectedValues.map((item) => {
    //         setValues({
    //             id: item.employeeId,
    //             fullName: `${item.employeeLastName}, ${item.employeeFirstName}`,
    //             address: item.employeeAddress,
    //             contact: item.employeeContactNumber,
    //             dateEmployed: item.dateEmployed,
    //             employeePositionName: item.employeePositionName,
    //             employeeTypeName: item.employeeTypeName,
    //             superiorEmployeeName: item.superiorEmployeeName
    //         })
    //     })
    // }

    // useEffect(() => {
    //     getValues();
    // }, [])

  return (
    <div>ExpenseMoreInfo</div>
  )
}
