import {
  productCard,
  productImage,
  productContent,
  productTitle,
  productMarket,
  productPrice,
  productRating,
  productAddCartBtn,
} from "../stylesheets/home.module.css";
import {
  PiShoppingCartSimpleFill,
  PiShoppingCartSimpleLight,
} from "react-icons/pi";
import { IconContext } from "react-icons";
import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { DataContext } from "../utils/Context";

const Product = ({ productData }) => {
  const { title, price, image, rating } = productData;
  const { rate, count } = rating;

  const [cartButton, setCartButton] = useState(true);

  const { productsInCart, setProductsInCart, setCartProducts } =
    useContext(DataContext);

  const handleCartClick = () => {
    setCartButton(() => !cartButton);
    if (cartButton) {
      setProductsInCart(productsInCart + 1);
      setCartProducts((prevCartProducts) => [
        ...prevCartProducts,
        { id: productData.id, title, price, image, rating },
      ]);
    } else {
      setProductsInCart(productsInCart - 1);
      setCartProducts((prevCartProducts) =>
        prevCartProducts.filter((product) => product.title !== title)
      );
    }
  };

  return (
    <div className={productCard}>
      <div className={productImage}>
        <img src={image} alt="" draggable="false" />
      </div>
      <div className={productContent}>
        <h2 className={productTitle}>{title}</h2>
        <div className={productRating}>
          <p>
            <span>Rating:</span> {rate}
          </p>
          <p>{count}</p>
        </div>
        <div className={productMarket}>
          <p className={productPrice}>${price}</p>
          <IconContext.Provider value={{ size: "24px" }}>
            <button className={productAddCartBtn} onClick={handleCartClick}>
              {cartButton ? (
                <PiShoppingCartSimpleLight />
              ) : (
                <PiShoppingCartSimpleFill />
              )}
            </button>
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  productData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      rate: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired,
    }),
  }),
};

export default Product;
