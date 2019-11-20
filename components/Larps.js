import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LarpList from './LarpList';
import LarpFormContainer from './styles/LarpFormContainer';
import CreateLarp from './CreateLarp';

class Larps extends Component {
  render() {
    const { larps } = this.props;
    return (
      <article>
        <h2>There are {larps.length} larps</h2>
        <LarpFormContainer>
          <CreateLarp />
        </LarpFormContainer>
        <LarpList larps={larps} />
      </article>
    );
  }
}

Larps.propTypes = {
  larps: PropTypes.array,
};

export default Larps;
