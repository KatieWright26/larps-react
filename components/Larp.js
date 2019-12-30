import React from 'react';
import PropTypes from 'prop-types';
import { truncate } from '../lib/stringFormatting';

const Larp = ({ larp: { name, description, date, location } }) => (
  <div>
    <h2>{name}</h2>
    {description && <p>{truncate(description, 150)}</p>}
    {date && location && (
      <div>
        <hr />
        <h6>
          Date of Event: {date}, {location}.
        </h6>
      </div>
    )}
  </div>
);

Larp.propTypes = {
  larp: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.string,
    location: PropTypes.string,
  }),
};

export default Larp;
