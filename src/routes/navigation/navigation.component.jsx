import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";

import logo from '../../assets/cloth-icon.png'

import './navigation.styles.scss'

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link to='/'  className="logo-container">
          <img src={logo} alt='cloth-icon-logo' />
        </Link>
        <div className="nav-links-container">
          <Link to={"/shop"} className="nav-link">
            SHOP
          </Link>
          <Link to={"/auth"} className="nav-link">
            LOGIN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
