import { Link } from "react-router-dom";
import styles from "./ErrorPage.module.css";

const ErrorPage = () => {
  return (
    <div className={styles.errorContainer}>
      <h1>Error 404</h1>
      <p>You can shopping at all heart content</p>
      <div>
        <Link to={"/"} />
        Back to Home
      </div>
    </div>
  );
};

export default ErrorPage;
