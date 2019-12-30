import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteCharacterFromDB } from '../actionCreators';

const mapStateToProps = state => ({
  larps: state.larps,
});

const mapDispatchToProps = {
  deleteCharacterFromDB,
};

const DeleteCharacter = ({ deleteCharacterFromDB, character }) => (
  <button type="button" onClick={() => deleteCharacterFromDB(character)}>
    Delete
  </button>
);
DeleteCharacter.propTypes = {
  character: PropTypes.number,
  deleteCharacterFromDB: PropTypes.func,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteCharacter);
