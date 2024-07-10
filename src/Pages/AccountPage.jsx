import React from "react";
import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { NavLink, useSearchParams } from "react-router-dom";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import "./Style/AccountPage.css";

function AccountPage() {
  const { user, isLoggedIn, disconnect } = useContext(AuthContext);
  const [displayLogin, setDisplayLogin] = useState(true);
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
