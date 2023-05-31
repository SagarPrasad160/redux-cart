import CartItem from "../Cart/CartItem";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const products = [
  {
    title: "Product 1",
    price: 10.99,
    description: "This is the description for Product 1.",
  },
  {
    title: "Product 2",
    price: 19.99,
    description: "This is the description for Product 2.",
  },
  {
    title: "Product 3",
    price: 7.5,
    description: "This is the description for Product 3.",
  },
  // Add more products as needed...
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map((item, index) => (
          <ProductItem item={item} key={index} />
        ))}
      </ul>
    </section>
  );
};

export default Products;
