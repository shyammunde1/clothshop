import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";

import { userContext } from "../../context/userContext";
import { signOutuser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../component/cart-icon/cart-icon.component";

import CartDropdown from "../../component/cart-dropdown/cart-dropdown.componnet";
import { CartContext } from "../../context/cart.context";

import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./navigation.styles";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(userContext);
  // console.log(currentUser)
  const { isCartOpen } = useContext(CartContext);

  const signOutHandler = async () => {
    await signOutuser();
    setCurrentUser(null);
  };

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <Logo />
        </LogoContainer>
        <NavLinks>
          <NavLink to={"/shop"} className="nav-link">
            SHOP
          </NavLink>
          {currentUser ? (
            <NavLink as='span' className="nav-link" onClick={signOutHandler}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to={"/auth"}>LOGIN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
