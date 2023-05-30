import classes from "./CartButton.module.css";

import { useDispatch } from "react-redux";

import { toggleCartDisplay } from "../../store/cartSlice";

const CartButton = (props) => {
  const dispatch = useDispatch();

  const handleCartDisplay = () => {
    dispatch(toggleCartDisplay());
  };

  return (
    <button className={classes.button} onClick={handleCartDisplay}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
