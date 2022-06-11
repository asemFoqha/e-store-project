import React, { FormEvent, useContext, useState } from "react";

import { login } from "../data/users";
import CartItemsContext from "../context/cartItemsContext";

import StyledLogin from "../components/styled/Login.styled";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const context = useContext(CartItemsContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const user = await login(email, password);
    context.setUser(user);

    return () => {
      setEmail("");
      setPassword("");
    };
  };

  return (
    <StyledLogin>
      <div className="login-box">
        <span>try userA@gmail.com </span>
        <span>P@ssw0rd</span>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="user-box">
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={({ target: { value: email } }) => setEmail(email)}
            />
            <label htmlFor={"email"}>Email</label>
          </div>
          <div className="user-box">
            <input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={({ target: { value: password } }) =>
                setPassword(password)
              }
            />
            <label htmlFor={"password"}>Password</label>
          </div>
          <button>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Login
          </button>
        </form>
      </div>
    </StyledLogin>
  );
};

export default Login;
