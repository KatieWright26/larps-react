import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from './Header';
import CreateLarp from './CreateLarp';
import { Page, PageInner } from './styles/Page';
import LarpList from './LarpList';
import {
  deleteLarpFromDB,
  deleteCharacter,
  createCharacterInDb,
  createLarpInDb,
} from '../actionCreators';

const mapStateToProps = state => ({
  larps: state.larps,
  user: state.user,
});

const mapDispatchToProps = {
  deleteLarpFromDB,
  createCharacterInDb,
  deleteCharacter,
  createLarpInDb,
};

class App extends Component {
  render() {
    const {
      user,
      larps,
      deleteLarpFromDB,
      createCharacterInDb,
      deleteCharacter,
      createLarpInDb,
    } = this.props;
    return (
      <Page>
        <Header user={user} />
        <PageInner>
          <article>
            <h2>There are {larps.length} larps</h2>
            <CreateLarp createLarpInDb={createLarpInDb} />
            <LarpList
              larps={larps}
              deleteCharacter={deleteCharacter}
              createCharacterInDb={createCharacterInDb}
              deleteLarpFromDB={deleteLarpFromDB}
            />
          </article>
        </PageInner>
      </Page>
    );
  }
}

// Proptypes related to larps and characters needs to be removed from app component
App.propTypes = {
  createCharacterInDb: PropTypes.func,
  deleteCharacter: PropTypes.func,
  createLarpInDb: PropTypes.func,
  deleteLarpFromDB: PropTypes.func,
  larps: PropTypes.array,
  user: PropTypes.object,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
