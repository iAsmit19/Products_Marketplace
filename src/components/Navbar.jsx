import { NavLink } from "react-router-dom";
import {
  navbar,
  navbarContainer,
  navElements,
  navLinks,
  navLogo,
} from "../stylesheets/navbar.module.css";
import marketplace from "/src/assets/logo-icon/marketplace-full.svg";
import { IconContext } from "react-icons";
import { PiShoppingCartSimpleLight } from "react-icons/pi";

const Navbar = () => {
  return (
    <div className={navbar}>
      <div className={navbarContainer}>
        <div className={navLogo}>
          <img
            draggable="false"
            src={marketplace}
            alt=""
          />
        </div>
        <div className={navElements}>
          <NavLink
            className={navLinks}
            style={({ isActive }) => {
              return {
                color: isActive
                  ? "var(--navbar-font-active)"
                  : "var(--navbar-font)",
              };
            }}
            to={"/"}
          >
            Home
          </NavLink>

          <IconContext.Provider value={{ size: "26px" }}>
            <NavLink
              className={navLinks}
              style={({ isActive }) => {
                return {
                  color: isActive
                    ? "var(--navbar-font-active)"
                    : "var(--navbar-font)",
                };
              }}
              to={"/cart"}
            >
              <PiShoppingCartSimpleLight />
            </NavLink>
          </IconContext.Provider>
        </div>
      </div>

    </div>
  );
};

export default Navbar;
