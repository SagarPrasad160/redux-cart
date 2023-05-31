import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

import { useFetchItemsQuery } from "../../store";

import { useSelector } from "react-redux";

const Cart = () => {
  const { data, isFetching, error } = useFetchItemsQuery();

  const showCart = useSelector((state) => state.showCart);

  if (isFetching) {
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
    console.log(data);
    var results = [];
    for (let key in data) {
      results.push({
        id: key,
        title: data[key].title,
        price: data[key].price,
        description: data[key].description,
        quantity: data[key].quantity,
      });
    }
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
