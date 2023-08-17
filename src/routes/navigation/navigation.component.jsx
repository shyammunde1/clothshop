import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import {ReactComponent as Logo} from "../../assets/crown.svg";

import { userContext } from "../../context/userContext";
import { signOutuser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../component/cart-icon/cart-icon.component";

import "./navigation.styles.scss";
import CartDropdown from "../../component/cart-dropdown/cart-dropdown.componnet";
import { CartContext } from "../../context/cart.context";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(userContext);
  // console.log(currentUser)
  const {isCartOpen} =useContext(CartContext)

  const signOutHandler = async () => {
    await signOutuser();
    setCurrentUser(null);
  };

  return (
    <Fragment>
      <div className="navigation">
        <Link to="/" className="logo-container">
          <Logo />
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
          <CartIcon  />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
