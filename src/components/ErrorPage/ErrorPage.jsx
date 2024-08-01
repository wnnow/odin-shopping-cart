import { Link } from "react-router-dom";
import styles from "./ErrorPage.module.css";

const ErrorPage = () => {
  return (
    <div className={styles.errorContainer}>
      <h1>Oops! 404 page not found</h1>
      <p>We can&#39;t seem to find the page you&#39;re looking for.</p>
      <button className={styles.backBtn}>
        <Link to={"/"}>Back to Home</Link>
      </button>
    </div>
  );
};

export default ErrorPage;
