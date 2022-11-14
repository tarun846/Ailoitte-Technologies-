import React from 'react';
import logo from '../../assets/logo.svg';
import './Nav.css';
import styled from 'styled-components';

let Navbar = styled.nav`
 min-height: 7vh;
`
export function Nav() {
  return (
    <>
      <Navbar>
        <img src={logo} alt="logo" />
      </Navbar>
    </>
  );
}
