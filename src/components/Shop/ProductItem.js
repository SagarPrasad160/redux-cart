import Card from "../UI/Card";
import classes from "./ProductItem.module.css";

import { useAddItemMutation } from "../../store";

const ProductItem = ({ item }) => {
  const { title, price, description } = item;

  const [addItem, results] = useAddItemMutation();

  console.log(results);

  const handleClick = () => {
    addItem(item);
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
