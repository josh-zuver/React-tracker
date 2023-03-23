import React from "react";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  // array containing dummy expense objects
  const expenses = [
    {
      id: "e1",
      expenseReason: "Toilet Paper",
      cost: 94.12,
      date: new Date(2022, 7, 14),
    },
    {
      id: "e2",
      expenseReason: "New TV",
      cost: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      expenseReason: "Car Insurance",
      cost: 294.67,
      date: new Date(2023, 2, 28),
    },
    {
      id: "e4",
      expenseReason: "New Desk (Wooden)",
      cost: 450,
      date: new Date(2023, 5, 12),
    },
  ];

  return (
    <div>
      <h2>Let's get started!!!!!!</h2>
      <Expenses items = {expenses} />
    </div>
  );
}

export default App;
