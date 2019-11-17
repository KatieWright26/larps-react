import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteCharacterFromDB } from '../actionCreators';

const mapStateToProps = state => ({
  larps: state.larps,
});

const mapDispatchToProps = {
  deleteCharacterFromDB,
};

class DeleteCharacter extends Component {
  render() {
    const { deleteCharacterFromDB, character } = this.props;
    return (
      <button type="button" onClick={() => deleteCharacterFromDB(character)}>
        Delete
      </button>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteCharacter);
