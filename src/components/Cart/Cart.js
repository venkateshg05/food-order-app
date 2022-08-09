import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const items = [{ id: "1", name: "name1" }];
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {items.map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35</span>
      </div>
      <div>
        <button className={classes["button--alt"]} onClick={props.onHideCart}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
