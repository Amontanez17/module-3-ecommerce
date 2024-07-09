import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { NavLink } from "react-router-dom";

function Navbar() {
  const { user, isLoggedIn, disconnect } = useContext(AuthContext);
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to={"/products"}>Shop</NavLink>
        </li>

        {!isLoggedIn ? (
          <>
            <li>
              <NavLink to={"/signup"}>Sign up</NavLink>
            </li>
            <li>
              <NavLink to={"/login"}>Login</NavLink>
            </li>
            <li>
              <NavLink to={"/cart"}>Cart</NavLink>
            </li>
          </>
        ) : (
          <>
            <li>
              <button onClick={disconnect}>Logout</button>
            </li>
            <li>
              <p>Welcome back {user.username}</p>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
