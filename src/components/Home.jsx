import { useContext } from "react";
import { homeContainer, productShowcase } from "../stylesheets/home.module.css";
import { DataContext } from "../utils/Context";
// import { IconContext } from "react-icons";
// import { PiShoppingCartSimpleLight } from "react-icons/pi";
// import { IconContext } from "react-icons";
import Product from "./Product";

const Home = () => {
  const { productsData } = useContext(DataContext);
  return (
    <div className={homeContainer}>
      <div className={productShowcase}>
        {productsData.map(({ id, title, price, image, rating }) => {
          return (
            <Product key={id} productData={{ title, price, image, rating }} />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
