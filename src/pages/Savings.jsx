import { useSelector, useDispatch } from "react-redux";
import { fetchExpenses, fetchIncome } from "../actions.js";
import { useEffect } from "react";

export default function Savings() {
  const dispatch = useDispatch();
  const income = useSelector((state) => state.income);
  const expenses = useSelector((state) => state.expenses);

  const totalExpenses = expenses.reduce((acc, curr) => curr.amount + acc, 0);
  const totalIncome = income.reduce((acc, curr) => curr.amount + acc, 0);

  const totalSavings = totalIncome - totalExpenses;

  useEffect(() => {
    dispatch(fetchIncome());
  }, []);

  useEffect(() => {
    dispatch(fetchExpenses());
  }, []);

  return (
    <main>
      <h1>Savings</h1>
      <h2>Savings Total: ${totalSavings}</h2>
    </main>
  );
}
