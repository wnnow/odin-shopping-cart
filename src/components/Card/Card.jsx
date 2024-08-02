import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./Card.module.css";
import { useOutletContext } from "react-router-dom";

const Card = ({ category, item }) => {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const { cart, setCart } = useOutletContext();
  useEffect(() => {
    setProduct(item);
  }, []);

  // useEffect(() => {
  //   console.log(cart);
  // }, [cart]);

  Card.propTypes = {
    category: PropTypes.string,
    item: PropTypes.object.isRequired,
  };

  function handleChange(e) {
    setQuantity(+e.target.value);
  }

  function handleClick() {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(
        (element) => element.title === product.title
      );

      if (existingProductIndex !== -1) {
        const updateCart = [...prevCart];
        updateCart[existingProductIndex] = {
          ...updateCart[existingProductIndex],
          quantity: updateCart[existingProductIndex].quantity + quantity,
        };
        return updateCart;
      } else {
        return [
          ...prevCart,
          {
            id: product.id,
            title: product.title,
            category: product.category,
            image: product.image,
            quantity: quantity,
            price: product.price,
          },
        ];
      }
    });
    setQuantity(0);
  }
  console.log(cart);
  return (
    <>
      {category === "default" ? (
        <li className={styles.card}>
          <div className={styles.cardContainer}>
            <div className={styles.cardTitle} title={item.title}>
              {item.title}
            </div>
            <div className={styles.imageContainer}>
              <img
                className={styles.cardImage}
                src={item.image}
                alt={item.title}
              />
            </div>
            <div className={styles.cardPrice}>{item.price}$</div>
            <div className={styles.quantityContainer}>
              <div>Quantity</div>
              <input
                className={styles.quantity}
                type="number"
                max={99}
                min={0}
                value={quantity}
                onChange={handleChange}
              />
            </div>
            <button className={styles.addItemBtn} onClick={handleClick}>
              Add to Cart
            </button>
          </div>
        </li>
      ) : item.category === category ? (
        <li className={styles.card}>
          <div className={styles.cardContainer}>
            <div className={styles.cardTitle} title={item.title}>
              {item.title}
            </div>
            <div className={styles.imageContainer}>
              <img
                className={styles.cardImage}
                src={item.image}
                alt={item.title}
              />
            </div>
            <div className={styles.cardPrice}>{item.price}$</div>
            <div className={styles.quantityContainer}>
              <div>Quantity</div>
              <input
                className={styles.quantity}
                type="number"
                max={99}
                min={0}
                value={quantity}
                onChange={handleChange}
              />
            </div>
            <button className={styles.addItemBtn} onClick={handleClick}>
              Add to Cart
            </button>
          </div>
        </li>
      ) : null}
    </>
  );
};

export default Card;
