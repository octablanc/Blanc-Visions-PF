import logo from "../../assets/logo2.svg";
import { HiOutlineMagnifyingGlass, BsCart4 } from "../../icons";
import { Link, NavLink } from "react-router-dom";
import {
  Navbar,
  NavMenu,
  NavOptions,
  Spacing,
  Nav,
  AuthButtons,
} from "./styled-components/Header.styled";
import { useAppDispatch, useAppSelector } from "../../redux/app/hooks";
import { useEffect } from "react";
import { getAllCategories } from "../../redux/slices/categories";

// Login, Singup and Logout
import Login from "../login/Login";
// import LogOut from '../login/components/LogOut';
import SingUp from "../singup/SingUp";
import { User } from "../../models/User.model";
import AccountMenu from "./components/AccountMenu";
import { FilterCategory } from "../FilterCategory";
import { getDiscountTotal } from "../../redux/slices/Cart";
import { FormSearch } from "../Search/FormSearch";

import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { createTheme } from "@mui/material/styles";

export const Header = () => {
  const userState: User | null = useAppSelector(
    ({ userState }) => userState.user
  );

  const { user } = useAppSelector((state) => state.userState);
  const loading = useAppSelector(({ userState }) => userState.loading);
  const { cartItems, cartTotalQuantity } = useAppSelector(
    (state) => state.cartState
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getDiscountTotal(cartItems));
  }, [dispatch]);

  const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  return (
    <>
      <Nav>
        <Navbar className="container">
          <Link to="/">
            <img src={logo} alt="kingcomm" />
          </Link>

          <NavMenu>
            <FormSearch />
            <NavOptions>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "active" : undefined
                  }
                >
                  Inicio
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    isActive ? "active" : undefined
                  }
                >
                  Productos
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "active" : undefined
                  }
                >
                  Nosotros
                </NavLink>
              </li>

              <FilterCategory />

              {user ? (
                <li>
                  <IconButton aria-label="cart">
                    <StyledBadge
                      badgeContent={cartTotalQuantity}
                      color="primary"
                    >
                      <Link to="/cart">
                        <BsCart4 />
                      </Link>
                    </StyledBadge>
                  </IconButton>
                </li>
              ) : (
                <li></li>
              )}

              <li>
                {loading ? (
                  <></>
                ) : !userState ? (
                  <AuthButtons>
                    <Login />
                    <SingUp />
                  </AuthButtons>
                ) : (
                  <AccountMenu />
                )}
              </li>
            </NavOptions>
          </NavMenu>
        </Navbar>
      </Nav>
      <Spacing></Spacing>
    </>
  );
};
