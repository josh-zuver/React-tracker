import ExpenseItem from "./ExpenseItem";
import "./Expense.css";

function Expenses(props) {
  return (
    <div className="expenses">
      <ExpenseItem
        expenseReason={props.items[0].expenseReason}
        cost={props.items[0].cost}
        date={props.items[0].date}
      />

      <ExpenseItem
        expenseReason={props.items[1].expenseReason}
        cost={props.items[1].cost}
        date={props.items[1].date}
      />

      <ExpenseItem
        expenseReason={props.items[2].expenseReason}
        cost={props.items[2].cost}
        date={props.items[2].date}
      />

      <ExpenseItem
        expenseReason={props.items[3].expenseReason}
        cost={props.items[3].cost}
        date={props.items[3].date}
      />
    </div>
  );
}

export default Expenses;
