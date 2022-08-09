import { useRef, useState } from "react";
import Input from "../../UI/Input";

import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const amountRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountRef.current.value;
    if (enteredAmount.trim().length === 0) {
      setAmountIsValid(false);
      return;
    }

    const enteredAmountNum = +enteredAmount;
    props.onAddToCart(enteredAmountNum);
  };
  const input = {
    id: "amount_" + props.id,
    type: "number",
    min: "1",
    max: "5",
    step: "1",
    defaultValue: "1",
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input ref={amountRef} label="Amount" input={input} />
      <button>+ Add</button>
      {!amountIsValid && <p>Enter a valid number</p>}
    </form>
  );
};

export default MealItemForm;
