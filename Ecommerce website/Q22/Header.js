import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import cartContext from "../store/cart-Context";
import loginContext from "../store/login-context";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  const loginCtx = useContext(loginContext);
  const cartCtx = useContext(cartContext);
  const history = useHistory();

  const logoutHandler = () => {
    loginCtx.logout();
    cartCtx.logoutCartHandler();
  };

  const loginTabClickHandler = () => {
    history.push("/login");
  };

  return (
    <React.Fragment>
      <header className={classes.header}>
        <nav>
          <ul>
            <li>
              <NavLink activeClassName={classes.active} to="/home">
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName={classes.active} to="/product">
                PRODUCT
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName={classes.active} to="/about">
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName={classes.active} to="/contact">
                CONTACT
              </NavLink>
            </li>
            {!loginCtx.isloggedIn && (
              <li className={classes.login}>
                <NavLink activeClassName={classes.active} to="/login">
                  LOGIN
                </NavLink>
              </li>
            )}
            {loginCtx.isloggedIn && (
              <li className={classes.logout} onClick={logoutHandler}>
                <NavLink activeClassName={classes.active} to="/login">
                  LOGOUT
                </NavLink>
              </li>
            )}
          </ul>
        </nav>
        <div>
          <HeaderCartButton />
        </div>
      </header>
      {!loginCtx.isloggedIn && (
        <div className={classes.loginTab} onClick={loginTabClickHandler}>
          LOGIN
        </div>
      )}
    </React.Fragment>
  );
};

export default Header;