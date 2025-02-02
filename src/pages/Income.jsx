import { useSelector, useDispatch } from "react-redux";
import { fetchIncome } from "../actions.js";
import { useEffect } from "react";

export default function Income() {
  const dispatch = useDispatch();
  const income = useSelector((state) => state.income);

  const totalIncome = income?.reduce((acc, curr) => curr.amount + acc, 0);

  useEffect(() => {
    dispatch(fetchIncome());
  }, []);
  return (
    <main>
      <h1>Income Page</h1>
      <h2>Total: ${totalIncome}</h2>
      <ul>
        {income?.map((salary, index) => (
          <li key={index}>
            {salary.description}: ${salary.amount}
          </li>
        ))}
      </ul>
    </main>
  );
}
