import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getLogoutAPI } from "../Redux/Authreducer/action";
const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.authreducer.data.isAuth);
  const handle = () => {
    if (!auth) navigate("/login");
    if (auth) {
      dispatch(getLogoutAPI());
    }
  };

  return (
    <div>
      <div data-cy="navbar-home-link">
      <ul>
  <li><a class="active" href="#home">Home</a></li>
  <li><a href="#news">News</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a href="#about">About</a></li>
</ul>
      </div>

      <div>

        {
          <button data-cy="navbar-login-button" onClick={handle}>
            {localStorage.getItem("login") ? "Logout" : "Login"}
          </button>
        }
      </div>
    </div>
  );
};

export default Navbar;
