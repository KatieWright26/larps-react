import React from 'react';
import PropTypes from 'prop-types';

const Larp = props => {
  const { name, description } = props;
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
};

Larp.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
};

export default Larp;
