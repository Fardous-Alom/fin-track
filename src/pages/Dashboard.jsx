import React, { useEffect, useState } from "react";
import "../styles/Dashboard.css";
import TransactionCards from "../Components/TransactionCards";
import RecentTransactions from "../Components/RecentTransactions";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import NoTransactions from "../components/NoTransactions";
import { useNavigate } from "react-router-dom";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const categories = [
  "Salary",
  "Groceries",
  "Dining",
  "Transport",
  "Entertainment",
  "Others",
];

function Dashboard() {
  const [transactions, setTransactions] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [balance, setBalance] = useState(0);
  const [categoryData, setCategoryData] = useState({});
  const [maxExpense, setMaxExpense] = useState(0);

  const navigate = useNavigate();

  const parseTransactions = () => {
    try {
      const data = JSON.parse(localStorage.getItem("transactions"));
      return Array.isArray(data) ? data : [];
    } catch (err) {
      console.error("Failed to parse transactions:", err);
      return [];
    }
  };

  const calculateStats = (transactions) => {
    let income = 0;
    let expense = 0;
    let categoryBreakdown = Object.fromEntries(
      categories.map((cat) => [cat, 0])
    );
    let highestExpense = 0;

    transactions.forEach((tx) => {
      const { type, amount, category } = tx;

      if (type === "Income") {
        income += amount;
      } else {
        expense += amount;
        if (categoryBreakdown.hasOwnProperty(category)) {
          categoryBreakdown[category] += amount;
          if (categoryBreakdown[category] > highestExpense) {
            highestExpense = categoryBreakdown[category];
          }
        }
      }
    });

    setTotalIncome(income);
    setTotalExpense(expense);
    setBalance(income - expense);
    setCategoryData(categoryBreakdown);
    setMaxExpense(highestExpense);
  };

  useEffect(() => {
    const storedTransactions = parseTransactions();
    setTransactions(storedTransactions);
    calculateStats(storedTransactions);
  }, []);

  const chartData = {
    labels: categories,
    datasets: [
      {
        label: "Expenses per Category",
        data: categories.map((cat) => categoryData[cat] || 0),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4CAF50",
          "#9966FF",
          "#FFA07A",
        ],
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
        suggestedMax: maxExpense > 0 ? maxExpense * 1.2 : 10,
        grid: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="dashboard">
      <div className="dashboard-inner">
        <h2>Dashboard</h2>
        <button
          className="add-transaction"
          onClick={() => navigate("/add-transaction")}
        >
          + Add Transaction
        </button>
      </div>

      <TransactionCards
        balance={balance}
        income={totalIncome}
        expense={totalExpense}
      />

      <div className="transactions-chart-row">
        <div className="transactions half-width">
          <h3>Recent Transactions</h3>
          {transactions.length === 0 ? (
            <NoTransactions />
          ) : (
            <RecentTransactions transactions={transactions} />
          )}
        </div>

        <div className="expense-chart half-width">
          <h3>Expense by Category</h3>
          {chartData.datasets[0].data.every((value) => value === 0) ? (
            <NoTransactions />
          ) : (
            <div className="chart-container">
              <Bar data={chartData} options={chartOptions} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
