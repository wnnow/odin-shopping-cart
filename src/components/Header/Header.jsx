import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import PropTypes from "prop-types";
import cart from "../../assets/shopping_cart_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg";

const Header = ({ itemInCart }) => {
  Header.propTypes = {
    itemInCart: PropTypes.number.isRequired,
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navContainer}>
        <div className={styles.logo}>
          All<span>EE</span>
        </div>
        <ul className={styles.listContainer}>
          <li>
            <Link to="/">
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li className={styles.cart}>
            <Link to="/cart">
              <img src={cart} alt="shopping cart" className={styles.cartIcon} />
            </Link>
            <div className={styles.totalProduct}>{itemInCart}</div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
