import React from "react";
import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { NavLink, useSearchParams, useLocation } from "react-router-dom";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import "./Style/AccountPage.css";

function AccountPage() {
  const { user, isLoggedIn, disconnect } = useContext(AuthContext);
  const [displayLogin, setDisplayLogin] = useState(true);
  const location = useLocation();
  console.log(location);
  return (
    <>
      <div>
        <h3>Account</h3>
      </div>
      {isLoggedIn ? (
        <>
          {/* <li>
            <NavLink to={"/cart"}>Cart</NavLink>
          </li> */}
          <li>
            <p>Welcome back {user.name}</p>
            <button onClick={disconnect}>Logout</button>
          </li>
        </>
      ) : (
        <>
          {location?.state?.redirected && (
            <p>Please log in before you partake in a good ol' breswky</p>
          )}
          <li>
            {displayLogin ? (
              <LoginPage setDisplayLogin={setDisplayLogin} />
            ) : (
              <SignupPage setDisplayLogin={setDisplayLogin} />
            )}
          </li>
        </>
      )}
    </>
  );
}

export default AccountPage;
