import classes from "./CartItem.module.css";

import {
  useFetchItemsQuery,
  useUpdateItemMutation,
  useAddItemMutation,
  useRemoveItemMutation,
} from "../../store";

import { deserializeData } from "../../helpers/results";

const CartItem = ({ item }) => {
  console.log(item);
  const { title, quantity, price } = item;

  const { data, isFetching, error } = useFetchItemsQuery();
  const [updateItem, updateResults] = useUpdateItemMutation();
  const [addItem, addResults] = useAddItemMutation();
  const [removeItem, removeResults] = useRemoveItemMutation();

  if (!isFetching && !error) {
    var cartItems = deserializeData(data);
  }

  console.log("item update status:", updateResults);
  console.log("adding item status", addResults);
  console.log("removing item status", removeResults);

  const handleAdd = () => {
    // check if the item is already present in results
    const idx = cartItems.findIndex((cartItem) => cartItem.id === item.id);
    console.log(idx);
    if (idx >= 0) {
      // item exists, make request to update the item quantity in the database

      const existingItem = cartItems[idx];
      let updatedItem = { ...existingItem };

      console.log(existingItem);
      if (existingItem.quantity) {
        // Increment the quantity by 1 if it exists
        updatedItem.quantity += 1;
      } else {
        // Set the quantity to 2 if it doesn't exist
        updatedItem.quantity = 2;
      }
      console.log(updatedItem);
      updateItem({ itemId: cartItems[idx].id, newItem: updatedItem });
    } else {
      // item is not there yet add it
      addItem(item);
    }
  };

  const handleRemove = () => {
    const idx = cartItems.findIndex((cartItem) => cartItem.id === item.id);
    if (idx >= 0) {
      // item is already present in cart, check if the qty is greater than 1
      if (cartItems[idx].quantity > 1) {
        const updatedItem = {
          ...cartItems[idx],
          quantity: cartItems[idx].quantity - 1,
        };
        updateItem({ itemId: cartItems[idx].id, newItem: updatedItem });
      }
      if (cartItems[idx].quantity === 1) {
        console.log("item to deleted", cartItems[idx]);
        removeItem(cartItems[idx].id);
      }
    }
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
