import { useState, useEffect } from "react";
import styles from "./Products.module.css";
import Card from "../Card/Card";
import ErrorPage from "../ErrorPage/ErrorPage";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isFetch, setIsFetch] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isFetchError, setIsFetchError] = useState(false);
  const [category, setCategory] = useState("default");

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!isFetch) {
          const response = await fetch("https://fakestoreapi.com/products");
          const data = await response.json();
          setProducts(data);
        }
      } catch (error) {
        setIsFetchError(true);
        console.error(error);
      } finally {
        setIsLoading(false);
        setIsFetch(true);
      }
    };
    fetchData();
  }, []);

  function handleCategoryClick(e) {
    setCategory(e.target.dataset.category);
  }

  console.log(products);
  console.log(category);

  return (
    <div className={`${styles.productsContainer} container`}>
      <ul className={styles.categoryList}>
        <li>
          <button
            className={styles.cateBtn}
            data-category="men's clothing"
            onClick={handleCategoryClick}
          >
            Men&#39;s clothing
          </button>
        </li>
        <li>
          <button
            className={styles.cateBtn}
            data-category="women's clothing"
            onClick={handleCategoryClick}
          >
            Women&#39;s clothing
          </button>
        </li>
        <li>
          <button
            className={styles.cateBtn}
            data-category="electronics"
            onClick={handleCategoryClick}
          >
            Electronics
          </button>
        </li>

        <li>
          <button
            className={styles.cateBtn}
            data-category="jewelery"
            onClick={handleCategoryClick}
          >
            Jewelery
          </button>
        </li>
      </ul>
      {isLoading && <div className={styles.loader}></div>}
      {isFetchError && <ErrorPage />}
      <ul className={styles.cardContainer}>
        {products.map((item) => (
          <Card key={item.id} category={category} item={item} />
        ))}
        {/* {!category &&
          products.map((item) => (
            <li key={item.id}>
              <p>{item.title}</p>
              <div>
                <img src={item.image} alt={item.title} />
              </div>
              <div>{item.price}$</div>
              <input type="number" max={99} />
            </li>
          ))}
        {category &&
          products.map((item) =>
            item.category === category ? (
              <li key={item.id}>
                <p>{item.title}</p>
                <div>
                  <img src={item.image} alt={item.title} />
                </div>
                <div>{item.price}$</div>
                <input type="number" max={99} />
              </li>
            ) : null
          )} */}
      </ul>
    </div>
  );
};

export default Products;
