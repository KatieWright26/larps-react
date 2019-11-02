import React, { Component } from 'react';
import { connect } from 'react-redux';
import Larp from './Larp';
import DeleteLarp from './DeleteLarp';
import CreateLarp from './CreateLarp';

const mapStateToProps = state => ({
  larps: state.larps,
  user: state.user,
});

const deleteLarp = larpId => ({ type: 'DELETE_LARP', payload: larpId });

const createLarp = data => ({ type: 'CREATE_LARP', payload: data });

const mapDispatchToProps = { deleteLarp, createLarp };

class App extends Component {
  render() {
    console.log(this.props);
    const { user, larps, deleteLarp, createLarp } = this.props;
    return (
      <div>
        <h1>Welcome to {this.props.name}</h1>

        <h2>You are logged in as {user.name}</h2>

        <h2>There are {larps.length} larps</h2>
        <CreateLarp createLarp={createLarp} />
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
