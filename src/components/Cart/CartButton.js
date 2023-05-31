import classes from "./CartButton.module.css";

import { useDispatch } from "react-redux";

import { toggleCartDisplay } from "../../store/cartSlice";

import { useFetchItemsQuery } from "../../store";

import { deserializeData } from "../../helpers/results";

const CartButton = (props) => {
  const { data, isFetching, error } = useFetchItemsQuery();

  let cartSize = 0;
  if (!error && !isFetching) {
    cartSize = deserializeData(data).length;
  }

  const dispatch = useDispatch();
  const handleCartDisplay = () => {
    dispatch(toggleCartDisplay());
  };

  return (
    <button className={classes.button} onClick={handleCartDisplay}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartSize}</span>
    </button>
  );
};

export default CartButton;
