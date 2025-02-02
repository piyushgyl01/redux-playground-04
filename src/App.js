import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Expense from "./pages/Expense";
import Income from "./pages/Income";
import Savings from "./pages/Savings";
import IncomeExpenseForm from "./pages/IncomeExpenseForm";
import "./styles.css";

export default function App() {
  return (
    <div className="app">
      <h1>⚛️ react playground!</h1>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/income">Income</Link>
              </li>
              <li>
                <Link to="/expenses">Expense</Link>
              </li>
              <li>
                <Link to="/savings">Savings</Link>
              </li>
              <li>
                <Link to="/">New Entries</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/income" element={<Income />} />
            <Route path="/expenses" element={<Expense />} />
            <Route path="/savings" element={<Savings />} />
            <Route path="/" element={<IncomeExpenseForm />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}
