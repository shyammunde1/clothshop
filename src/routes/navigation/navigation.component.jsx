import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../../assets/cloth-icon.png";

import { userContext } from "../../context/userContext";
import { signOutuser } from "../../utils/firebase/firebase.utils";

import "./navigation.styles.scss";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(userContext);
  // console.log(currentUser)

  const signOutHandler = async () => {
    await signOutuser();
    setCurrentUser(null);
  };

  return (
    <Fragment>
      <div className="navigation">
        <Link to="/" className="logo-container">
          <img src={logo} alt="cloth-icon-logo" />
        </Link>
        <div className="nav-links-container">
          <Link to={"/shop"} className="nav-link">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              SIGN OUT
            </span>
          ) : (
            <Link to={"/auth"} className="nav-link">
              LOGIN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
