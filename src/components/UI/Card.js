/* Wrapper class to reduce code duplication
   Used in Expenses and ExpenseItem components
*/
import React from "react";
import "./Card.css";

function Card(props){
    //to preserve styling
    const classes = "card " + props.className;

    return <div className={classes}>{props.children}</div>;
}

export default Card;