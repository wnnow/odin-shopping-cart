import { useState } from "react";
import PropTypes from "prop-types";

const Card = ({ category, item }) => {
  const [quantity, setQuantity] = useState(0);

  Card.propTypes = {
    category: PropTypes.string,
    item: PropTypes.object.isRequired,
  };

  return (
    <>
      {category === "default" ? (
        <li key={item.id}>
          <p>{item.title}</p>
          <div>
            <img src={item.image} alt={item.title} />
          </div>
          <div>{item.price}$</div>
          <input type="number" max={99} value={quantity} />
        </li>
      ) : item.category === category ? (
        <li key={item.id}>
          <p>{item.title}</p>
          <div>
            <img src={item.image} alt={item.title} />
          </div>
          <div>{item.price}$</div>
          <input type="number" max={99} value={quantity} />
        </li>
      ) : null}
    </>
  );
};

export default Card;
