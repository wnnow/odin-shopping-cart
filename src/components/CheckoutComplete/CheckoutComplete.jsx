import { Link } from "react-router-dom";
import styles from "./CheckoutComplete.module.css";

const CheckoutComplete = () => {
  return (
    <div className={`container ${styles.checkoutContainer}`}>
      <h1>Thank you for shopping with us</h1>
      <p>Hope we will meet again soon.</p>

      <button className={styles.backBtn}>
        <Link to={"/"}>Back to Home</Link>
      </button>
    </div>
  );
};

export default CheckoutComplete;
