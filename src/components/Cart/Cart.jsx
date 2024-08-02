import { Link, useOutletContext } from "react-router-dom";
import styles from "./Cart.module.css";

const Cart = () => {
  const { cart, setCart } = useOutletContext();
  const totalPrice = cart.reduce((accumulator, item) => {
    return (accumulator += item.price * item.quantity);
  }, 0);

  function handleCheckOut() {
    setCart([]);
  }

  function handleDelete(itemId) {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  }

  return (
    <>
      {cart.length === 0 && (
        <div className={styles.emptyCartContainer}>
          <div className={styles.emptyCartText}>Cart is empty</div>
          <button className={styles.emptyCartBtn}>
            <Link to={"/products"}>Would you like to buy something?</Link>
          </button>
        </div>
      )}
      {cart.length > 0 && (
        <div className={`container ${styles.cartContainer}`}>
          {cart.map((item) => (
            <li key={item.id} className={styles.itemContainer}>
              <div>
                <img
                  className={styles.itemImage}
                  src={item.image}
                  alt={item.title}
                />
              </div>
              <div>{item.title}</div>

              <div>Quantity: {item.quantity}</div>
              <div>{item.price} $</div>
              <div>Total price: {item.price * item.quantity} $</div>
              <button
                className={styles.deleteBtn}
                onClick={() => handleDelete(item.id)}
              >
                Delete
              </button>
            </li>
          ))}
          <div className={styles.totalPriceContainer}>
            <div className={styles.totalPriceText}>Total</div>
            <div className={styles.totalPrice}>{totalPrice} $</div>
          </div>
          <div className={styles.checkOutBtnContainer}>
            <button className={styles.checkOutBtn} onClick={handleCheckOut}>
              <Link to="/checkout">Check out</Link>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
