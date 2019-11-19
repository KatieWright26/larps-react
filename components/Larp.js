import React from 'react';
import PropTypes from 'prop-types';

const Larp = props => {
  const { name, description, date, location } = props;
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      {date && location && (
        <>
          <hr />
          <h6>
            Date of Event: {date}, {location}.
          </h6>
        </>
      )}
    </div>
  );
};

Larp.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  date: PropTypes.string,
  location: PropTypes.string,
};

export default Larp;
