import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';
import {Switch, Route, Link} from 'react-router-dom';
import styled from 'styled-components';

const NavBarStyled = styled(Nav) `
// background:white;
box-shadow: 0px 10px 17px 0px rgb(0 0 0 / 5%);
`

const SiteName = styled.h3 `
// Color:#256ce1;
text-decoration: none;
`


const Navbar = (props) => {
  return (
    <>
      <NavBarStyled>
        <NavLink to='/'>
          <SiteName>{props.name}</SiteName>
        </NavLink>
        {/* <Bars /> */}
        <NavMenu>
          <NavLink to='/Home'>
            Home
          </NavLink>
          {/* <Link to='/ProductsPage'>
            Products Page
          </Link>
          <NavLink to='/ProductPage'>
            Product Page
          </NavLink>
          <NavLink to='/sign-up'>
            Sign Up
          </NavLink> */}
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        {/* <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn> */}
      </NavBarStyled>
    </>
  );
};

export default Navbar;