import React from 'react';
import styles from './InactivateExpenseModal.module.scss';
import MediumButton from '../../Shared/MediumButton/MediumButton';
import Rest from "../../../rest/Rest.tsx";

const INITIAL_URL = "http://localhost:8080/api/v1";

export default function InactivateExpenseModal({ inactivateSuccessAction, selectedValues }) {
    const rest = new Rest();
    const handleSubmit = () => {
        rest.inactivate(
            `${INITIAL_URL}/expense/inactivate`,
            { 'expenseListDto':selectedValues},
            inactivateSuccessAction,
            `Successfully inactivated ${selectedValues.length} expense.`
        )
    }

  return (
    <div className={styles.container}>
        <div className={styles.header}>
            Confirm Inactivate
        </div>
        <div className={styles.content}>
        {selectedValues.map((item) => {
            return (
                <div className={styles.content_row} key={item.expenseId}>
                    <div className={styles.details}>
                        ID: {item.expenseId}
                    </div>
                    <div className={styles.details}>
                        Expense Category Name: {item.expenseCategoryName}
                    </div>
                    <div className={styles.details}>
                        Expense Description: {item.expenseDescription}
                    </div>
                    <div className={styles.details}>
                        Expense Datetime: {item.expenseDate}
                    </div>
                    <div className={styles.details}>
                        Expense Cost: {item.expenseCost}
                    </div>
                </div>
            )
        })}
        </div>
        <div className={styles.footer}>
            <button onClick={handleSubmit}>
                <MediumButton label="Submit" />
            </button>
        </div>
    </div>
  )
}
