import React from "react";
import ExpenseDate from './ExpenseDate';
import "./ExpenseItem.css";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const clickEventHandler = () => {
    console.log('Clicked');
  };

  return (
    <Card className="expense-item">
        <ExpenseDate date = {props.date}/>
      <div className="expense-item__description">
        <h2>{props.expenseReason}</h2>
        <div className="expense-item__price">{props.cost}</div>
      </div>
      <button onClick={clickEventHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
