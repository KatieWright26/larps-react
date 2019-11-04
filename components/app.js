import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Larp from './Larp';
import DeleteLarp from './DeleteLarp';
import CreateLarp from './CreateLarp';
import CreateCharacter from './CreateCharacter';
import Character from './Character';
import DeleteCharacter from './DeleteCharacter';

const mapStateToProps = state => ({
  larps: state.larps,
  user: state.user,
});

const deleteLarp = payload => ({ type: 'DELETE_LARP', payload });

const deleteCharacter = payload => ({
  type: 'DELETE_CHARACTER',
  payload,
});

const createLarp = payload => ({ type: 'CREATE_LARP', payload });

const createCharacter = payload => ({ type: 'CREATE_CHARACTER', payload });

const mapDispatchToProps = {
  deleteLarp,
  createLarp,
  createCharacter,
  deleteCharacter,
};

class App extends Component {
  render() {
    const {
      user,
      larps,
      deleteLarp,
      createLarp,
      createCharacter,
      deleteCharacter,
    } = this.props;
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
              <ul>
                {larp.characters.map(character => (
                  <div key={character.id}>
                    <Character larp={larp} character={character} />
                    <DeleteCharacter
                      character={character.id}
                      deleteCharacter={deleteCharacter}
                    />
                  </div>
                ))}
              </ul>
              <CreateCharacter
                larp={larp.id}
                createCharacter={createCharacter}
              />
              <DeleteLarp larp={larp.id} deleteLarp={deleteLarp} />
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

App.propTypes = {
  createCharacter: PropTypes.func,
  deleteCharacter: PropTypes.func,
  createLarp: PropTypes.func,
  deleteLarp: PropTypes.func,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
