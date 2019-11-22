import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const mapStateToProps = state => ({
  larps: state.larps,
});

const mapDispatchToProps = {};

class ShowLarp extends Component {
  render() {
    const { larpId } = this.props.match.params;
    const { larps } = this.props;
    const id = parseInt(larpId);
    const larp = larps.filter(l => l.id === id)[0];
    return larp ? (
      <>
        <h1>{larp.name}</h1>
        <p>{larp.description}</p>
      </>
    ) : (
      <h1>Larp not found</h1>
    );
  }
}

ShowLarp.propTypes = {
  larps: PropTypes.array,
  larpId: PropTypes.string,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowLarp);
