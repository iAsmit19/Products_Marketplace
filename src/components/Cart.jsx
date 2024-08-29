import { useContext } from "react";
import {
  cartContainer,
  cartProductShowcase,
} from "../stylesheets/cart.module.css";
import {
  productCard,
  productImage,
  productContent,
  productTitle,
  productMarket,
  productPrice,
} from "../stylesheets/home.module.css";
import { DataContext } from "../utils/Context";

const Cart = () => {
  const { cartProducts } = useContext(DataContext);
  return (
    //   <div className={cartProductShowcase}>
    //     {cartProducts.map(({ id, title, price, image }) => (
    //       <div className={productCard} key={id}>
    //         <div className={productImage}>
    //           <img src={image} alt="" draggable="false" />
    //         </div>
    //         <div className={productContent}>
    //           <h2 className={productTitle}>{title}</h2>
    //           <div className={productMarket}>
    //             <p className={productPrice}>${price}</p>
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    <div className={cartContainer}>
      {cartProducts.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className={cartProductShowcase}>
          {cartProducts.map(({ id, title, price, image }) => (
            <div className={productCard} key={id}>
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
      )}
    </div>
  );
};

export default Cart;
