import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { mainContainer } from "./stylesheets/app.module.css";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className={mainContainer}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
