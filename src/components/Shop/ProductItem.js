import Card from "../UI/Card";
import classes from "./ProductItem.module.css";

import { useAddItemMutation, useFetchItemsQuery } from "../../store";

import { deserializeData } from "../../helpers/results";

const ProductItem = ({ item }) => {
  const { title, price, description } = item;

  const { data, isFetching, error } = useFetchItemsQuery();
  const [addItem, results] = useAddItemMutation();

  console.log(results);

  if (!error && !isFetching) {
    console.log(data);
    // if there is no id for item yet
    if (!item.id) {
      // extract this item's id from database and assign it to the item object
      for (let key in data) {
        if (data[key].title === item.title) {
          item.id = key;
        }
      }
    }
    var cartItems = deserializeData(data);
  }

  const handleClick = () => {
    // check if the item is already there or not
    console.log(cartItems);
    const idx = cartItems.findIndex((cartItem) => cartItem.id === item.id);
    console.log(idx);
    if (idx >= 0) {
      // item is already present
      alert("Item already exists in cart!");
      return;
    } else {
      // add item
      addItem({ ...item, quantity: 1 });
    }
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={handleClick}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
