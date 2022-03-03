import React, { useContext } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import { FaShoppingCart, FaCircle } from "react-icons/fa";
import { theme } from "../../GlobalStyles";
import Categories from "../DropDowns/Categories";
import Brands from "../DropDowns/Brands";
// import { BsCircle } from "react-icons/bs";

const Header = ({ cartDisplay, handleClickOnCart }) => {
  const { shoppingItems } = useContext(AppContext);
  return (
    <MainWrapper>
      <LogoRow>
        <HomeNavLink exact to="/">
          <Title>Wearable S</Title>
        </HomeNavLink>
      </LogoRow>
      <NavMenu>
        <Categories />
        <Brands />
        <StyledNavLink exact to="/products">
          <li>Shop All</li>
        </StyledNavLink>
        <li>
          <StyledCartIcon onClick={handleClickOnCart} />
          {shoppingItems[0] && <StyledCartNonEmpty></StyledCartNonEmpty>}
        </li>
      </NavMenu>
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  padding-bottom: "16px";
`;

const LogoRow = styled.div`
  display: flex;
  justify-content: center;
`;

const Title = styled.h1`
  color: black;
  font-weight: bold;
  letter-spacing: -3px;
`;

const NavMenu = styled.ul`
  display: flex;
  justify-content: space-around;
  color: black;
  text-transform: uppercase;
`;

const HomeNavLink = styled(NavLink)`
  cursor: pointer;
  text-decoration: none;
`;

const StyledNavLink = styled(NavLink)`
  cursor: pointer;
  text-decoration: none;
  color: black;

  &:hover {
    color: ${theme.accentColor};
  }
  &:visited {
    color: none;
  }
`;

const StyledCartIcon = styled(FaShoppingCart)`
  fill: black;
  cursor: pointer;
  font-size: 22px;

  &:hover {
    fill: ${theme.accentColor};
    transition: 0.3s ease-out;
  }
`;

const StyledCartNonEmpty = styled(FaCircle)`
  font-size: 20px;
  /* color: black; */
  fill: ${theme.accentColor};
  transform: translate(-6px, -12px);
`;

export default Header;
