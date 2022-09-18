import React from 'react';
import styles from './ExpenseContent.module.scss';
import Rest from '../../../rest/Rest.tsx'

export default function ExpenseContent() {
    const rest = new Rest();

  const [expenseData, setExpenseData] = useState([]);
  const handleExpenseData = (data) => {
    setExpenseData(data);
  }
  const getExpenseData = () => {
    rest.get(`${INITIAL_URL}/expense/transaction`, handleExpenseData)
  }

  useEffect(() => {
    getExpenseData();
  }, [])
  return (
    <div>ExpenseContent</div>
  )
}
