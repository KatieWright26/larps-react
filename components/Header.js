import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import NavBar from './styles/NavBar';

const Header = props => {
  const { user } = props;
  return (
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
        <li>
          <p>You are logged in as {user.name}</p>
        </li>
      </ul>
    </NavBar>
  );
};

Header.propTypes = {
  user: PropTypes.object,
};

export default Header;
