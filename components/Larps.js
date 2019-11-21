import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LarpItem from './LarpItem';
import LarpFormContainer from './styles/LarpFormContainer';
import CreateLarp from './CreateLarp';
import { createLarpInDb } from '../actionCreators';
import { LarpListStyle } from './styles/Larps';

const mapDispatchToProps = { createLarpInDb };

const mapStateToProps = state => ({
  larps: state.larps,
});

class Larps extends Component {
  render() {
    const { larps, createLarpInDb } = this.props;

    const createLarp = payload => {
      createLarpInDb(payload);
    };

    return (
      <article>
        <h2>There are {larps.length} larps</h2>
        <LarpFormContainer>
          <CreateLarp createLarp={createLarp} />
        </LarpFormContainer>
        <LarpListStyle>
          {larps.map(larp => (
            <LarpItem larp={larp} key={larp.id} />
          ))}
        </LarpListStyle>
      </article>
    );
  }
}

Larps.propTypes = {
  createLarpInDb: PropTypes.func,
  larps: PropTypes.array,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Larps);
