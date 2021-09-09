import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

const NavBar = () => {
  return (
    <NavWrp className="navbar navbar-expand-3 navbar-dark px-sm-5">
      <Link to="/">
        <img src={logo} alt="home" className="navbar-brand" />
      </Link>
      <ul className="navbar-nav align-items center">
        <li className="nav-item ml-5">
          <Link to="/" className="nav-link">
            <h2>products</h2>
          </Link>
        </li>
      </ul>
      <Link to="/cart">
        <ButtonContainer>
          <span style={{ marginRight: "5px" }}>
            <i className="fas fa-cart-plus " />
          </span>
          my cart
        </ButtonContainer>
      </Link>
    </NavWrp>
  );
};

const NavWrp = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize !important;
  }
`;

export default NavBar;
