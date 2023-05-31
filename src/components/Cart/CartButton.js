import classes from "./CartButton.module.css";

import { useDispatch } from "react-redux";

import { toggleCartDisplay } from "../../store/cartSlice";

import { useFetchItemsQuery } from "../../store";

const CartButton = (props) => {
  const { data, isFetching, error } = useFetchItemsQuery();

  let cartSize;
  if (data && !isFetching) {
    var results = [];
    for (let key in data) {
      results.push({
        id: key,
        title: data[key].title,
        price: data[key].price,
        description: data[key].description,
      });
    }
    cartSize = results.length;
  }

  const dispatch = useDispatch();
  const handleCartDisplay = () => {
    dispatch(toggleCartDisplay());
  };

  return (
    <button className={classes.button} onClick={handleCartDisplay}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartSize ? cartSize : "0"}</span>
    </button>
  );
};

export default CartButton;
