import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { mainContainer } from "./stylesheets/app.module.css";
import Home from "./components/Home";
import Cart from "./components/Cart";

const App = () => {
  return (
    <div className={mainContainer}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
