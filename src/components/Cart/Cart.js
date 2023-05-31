import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

import { useFetchItemsQuery } from "../../store";

import { useSelector } from "react-redux";

import { deserializeData } from "../../helpers/results";

const Cart = () => {
  const { data, isFetching, error } = useFetchItemsQuery();

  const showCart = useSelector((state) => state.showCart);

  if (isFetching && showCart) {
    return (
      <Card className={classes.cart}>
        <h2>loading...</h2>
      </Card>
    );
  } else if (error) {
    return (
      <Card className={classes.cart}>
        <h2>{error}</h2>
      </Card>
    );
  } else {
    var results = deserializeData(data);
  }

  if (results.length === 0 && showCart) {
    return (
      <Card className={classes.cart}>
        <h2>Item you add will show here.</h2>
      </Card>
    );
  }

  return (
    showCart && (
      <Card className={classes.cart}>
        <h2>Your Shopping Cart</h2>
        <ul>
          {results.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </ul>
      </Card>
    )
  );
};

export default Cart;
