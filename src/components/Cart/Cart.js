import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

import { useSelector } from "react-redux/es/exports";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  const { items, showCart } = cart;

  console.log(cart);

  if (items.length === 0 && showCart) {
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
          { items.map(item => <CartItem item={item}/>) }
          {/* <CartItem
          item={{ title: "Test Item", quantity: 3, total: 18, price: 6 }}
        /> */}
        </ul>
      </Card>
    )
  );
};

export default Cart;
