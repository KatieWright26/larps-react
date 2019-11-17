import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteLarpFromDB } from '../actionCreators';

const mapDispatchToProps = {
  deleteLarpFromDB,
};

const mapStateToProps = state => ({
  larps: state.larps,
});

class DeleteLarp extends Component {
  render() {
    const { deleteLarpFromDB, larp } = this.props;
    return (
      <button type="button" onClick={() => deleteLarpFromDB(larp.id)}>
        Delete {larp.name}
      </button>
    );
  }
}

DeleteLarp.propTypes = {
  deleteLarpFromDB: PropTypes.func,
  larp: PropTypes.object,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteLarp);
