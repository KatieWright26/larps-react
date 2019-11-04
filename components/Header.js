import React, { Component } from 'react';
import NavBar from './styles/NavBar';

const Header = props => (
  <NavBar>
    <ul>
      <li>
        <strong>
          <a href="/">Larping 2019</a>
        </strong>
      </li>
      <li>
        <p>You are logged in as {props.user.name}</p>
      </li>
    </ul>
  </NavBar>
);

export default Header;
