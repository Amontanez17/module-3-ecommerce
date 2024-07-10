import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { NavLink, Link } from "react-router-dom";

import "iconify-icon";
import "./Style/Navbar.css";

function Navbar() {
  const { user, isLoggedIn, disconnect, cart } = useContext(AuthContext);
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <header>
        <div>
          <NavLink to="/">
            <img id="webLogo" src="/icons/brewverse-2.png" />
          </NavLink>
        </div>
        <div className="actions">
          {/* this can become a component later */}
          {/* User icon and sub menu */}
          <div className="nav-menu-wrapper">
            <Link to={"/account"}>
              <img
                className="icon"
                src="/icons/lets-icons--user-alt-light.svg"
                onClick={() => setShowNav(!showNav)}
              />
            </Link>
          </div>
          <div>
            <NavLink to={"/cart"}>
              <img
                className="icon"
                src="/icons/iconoir--shopping-bag.svg"
                alt=""
              />
              <span>{cart && cart.products.length}</span>
            </NavLink>
          </div>
          <div>
            <img
              onClick={() => setShowBurgerMenu(!showBurgerMenu)}
              className="icon"
              src="/icons/solar--hamburger-menu-outline.svg"
              alt=""
            />
          </div>
        </div>
        <aside className={!showBurgerMenu ? "hide-that-aside" : ""}>
          <ul>
            <li>
              <Link to="/products">Shop</Link>
            </li>
            <li>
              <Link to="">About</Link>
            </li>
            <li>
              <Link to="">Contact</Link>
            </li>
          </ul>
        </aside>
      </header>
    </>
  );
}

export default Navbar;
