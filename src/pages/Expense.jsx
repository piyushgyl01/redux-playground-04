import { useSelector, useDispatch } from "react-redux";
import { fetchExpenses } from "../actions.js";
import { useEffect } from "react";

export default function Expense() {
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expenses);

  const totalExpenses = expenses.reduce((acc, curr) => curr.amount + acc, 0);

  useEffect(() => {
    dispatch(fetchExpenses());
  }, []);

  return (
    <main>
      <h1>Expense Page</h1>
      <h2>Total: ${totalExpenses}</h2>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            {expense.description}: ${expense.amount}
          </li>
        ))}
      </ul>
    </main>
  );
}
