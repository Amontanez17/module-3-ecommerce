import { useState, useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import service from "./../service/api";
import "./Style/AccountPage.css";

function LoginPage({ setDisplayLogin }) {
  const [formData, setFormData] = useState({
    password: "",
    email: "",
  });
  const { storeToken, authenticateUser, fetchCart } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  function handleChange(event) {
    const value = event.currentTarget.value;
    const key = event.currentTarget.id;
    setFormData({ ...formData, [key]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await service.post("/auth/login", formData);
      console.log(response);
      if (response.status === 200) {
        storeToken(response.data.authToken);
        await authenticateUser();
        await fetchCart();
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      setErrorMessage(error.response.data.message);
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    }
  }

  const { password, email } = formData;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" value={email} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="username">Password: </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handleChange}
        />
      </div>

      <p className="error">{errorMessage}</p>

      <p>
        No account?{" "}
        <span
          className="fake-link"
          onClick={() => setDisplayLogin((currentState) => !currentState)}
        >
          Sign up!
        </span>
      </p>
      <button>Login</button>
    </form>
  );
}

export default LoginPage;
