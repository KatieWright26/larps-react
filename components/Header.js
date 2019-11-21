import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './styles/NavBar';

const Header = () => (
  <NavBar>
    <ul>
      <li>
        <Link to="/">
          <strong>Larping 2019</strong>
        </Link>
      </li>
      <li>
        <Link to="/larps">Larps</Link>
      </li>
    </ul>
  </NavBar>
);

export default Header;
