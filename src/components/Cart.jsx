import { useContext, useEffect, useState } from "react";
import {
  cartContainer,
  cartProductShowcase,
  cartProductCard,
  productCheckout,
  cartButtons,
  cartContinueButton,
} from "../stylesheets/cart.module.css";
import {
  productImage,
  productContent,
  productTitle,
  productMarket,
  productPrice,
} from "../stylesheets/home.module.css";
import { DataContext } from "../utils/Context";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartProducts } = useContext(DataContext);
  const [cartTotal, setCartTotal] = useState(0);
  useEffect(() => {
    const total = cartProducts.reduce((acc, product) => acc + product.price, 0);
    setCartTotal(total);
  }, [cartProducts]);

  const navigator = useNavigate();
  const handleContinueClick = () => {
    navigator("/");
  };
  return (
    <div key={cartProducts.id} className={cartContainer}>
      {cartProducts.length === 0 ? (
        <h2>Your cart is empty</h2>
      ) : (
        <>
          <div className={cartProductShowcase}>
            {cartProducts.map(({ id, title, price, image }) => (
              <div className={cartProductCard} key={id}>
                <div className={productImage}>
                  <img src={image} alt="" draggable="false" />
                </div>
                <div className={productContent}>
                  <h2 className={productTitle}>{title}</h2>
                  <div className={productMarket}>
                    <p className={productPrice}>${price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={productCheckout}>
            <div className={cartTotal}>
              <h4>Your total : </h4>
              <h2>${cartTotal.toFixed(2)}</h2>
            </div>
            <div className={cartButtons}>
              <button id={cartContinueButton} onClick={handleContinueClick}>Continue Shopping</button>
              <button>Checkout</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
