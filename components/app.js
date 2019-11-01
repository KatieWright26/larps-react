import React, { Component } from 'react';
import { connect } from 'react-redux';
import Larp from './Larp';
import DeleteLarp from './DeleteLarp';

const mapStateToProps = state => ({
  larps: state.larps,
  user: state.user,
});

const deleteLarp = larpId => {
  console.log('eep', larpId);
  return { type: 'DELETE_LARP', payload: larpId };
};

const mapDispatchToProps = { deleteLarp };
class App extends Component {
  render() {
    console.log(this.props);
    const { user, larps, deleteLarp } = this.props;
    return (
      <div>
        <h1>Welcome to {this.props.name}</h1>

        <h2>You are logged in as {user.name}</h2>

        <h2>There are {larps.length} larps</h2>
        <ul>
          {larps.map(larp => (
            <div key={larp.id}>
              <Larp name={larp.name} />
              <DeleteLarp larp={larp.id} deleteLarp={deleteLarp} />
            </div>
          ))}
        </ul>
      </div>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
