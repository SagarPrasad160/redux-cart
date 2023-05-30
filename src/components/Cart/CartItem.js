import classes from "./CartItem.module.css";

import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../store";

const CartItem = ({ item }) => {
  const { title, quantity, price } = item;

  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addToCart(item));
  };
  const handleRemove = () => {
    dispatch(removeFromCart(item));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${price.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={handleRemove}>-</button>
          <button onClick={handleAdd}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
