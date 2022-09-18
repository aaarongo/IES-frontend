import React from 'react';
import SideMenu from '../../components/Shared/SideMenu/SideMenu';
import styles from'./ExpensePage.module.scss';
import Rest from '../../rest/Rest';
import Toast from '../../components/Shared/Toast/Toast';
import ExpenseTable from '../../components/Expense/ExpenseTable/ExpenseTable';

const INITIAL_URL = "http://localhost:8080/api/v1";

export default function ExpensePage() {
  const rest = new Rest();

  const [expenseData, setExpenseData] = useState([]);
  const handleExpenseData = (data) => {
    setExpenseData(data);
  }
  const getExpenseData = () => {
    rest.get(`${INITIAL_URL}/expense/transaction`, handleExpenseData)
  }

  return (
    <div className={styles.section}>
      <Toast />
      <SideMenu homeState="" viewincomeState="" viewexpenseState="active"/>
      <div className={styles.content}>
        {/* <ExpenseTable 
        /> */}
      </div>
    </div>
  )
}