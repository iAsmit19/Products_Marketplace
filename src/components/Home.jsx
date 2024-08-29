import { useContext } from "react";
import {
  homeContainer,
  productShowcase,
  productCard,
  productImage,
  productContent,
  productTitle,
  productMarket,
  productPrice,
  productRating,
  productAddCartBtn,
} from "../stylesheets/home.module.css";
import { DataContext } from "../utils/Context";
// import { IconContext } from "react-icons";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { IconContext } from "react-icons";

const Home = () => {
  const { productsData } = useContext(DataContext);
  return (
    <div className={homeContainer}>
      <div className={productShowcase}>
        {productsData.map(({ id, title, price, image, rating }) => {
          const { rate, count } = rating;
          {
            /* {productsData.map((products) => { */
          }
          // console.log(products);

          return (
            <div key={id} className={productCard}>
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
                    <button className={productAddCartBtn}>
                      <PiShoppingCartSimpleLight />
                    </button>
                  </IconContext.Provider>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
