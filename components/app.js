import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from './Header';
import Larp from './Larp';
import DeleteLarp from './DeleteLarp';
import CreateLarp from './CreateLarp';
import CreateCharacter from './CreateCharacter';
import Character from './Character';
import DeleteCharacter from './DeleteCharacter';
import { Page, PageInner } from './styles/Page';
import { LarpItem, LarpList } from './styles/Larps';
import { CharacterSection, CharacterArticle } from './styles/Characters';
import {
  deleteLarpFromDB,
  deleteCharacter,
  createLarp,
  createCharacter,
} from '../actionCreators';

const mapStateToProps = state => ({
  larps: state.larps,
  user: state.user,
});

const mapDispatchToProps = {
  deleteLarpFromDB,
  createLarp,
  createCharacter,
  deleteCharacter,
};

class App extends Component {
  render() {
    const {
      user,
      larps,
      deleteLarpFromDB,
      createLarp,
      createCharacter,
      deleteCharacter,
    } = this.props;
    return (
      <Page>
        <Header user={user} />
        <PageInner>
          <article>
            <h2>There are {larps.length} larps</h2>
            <CreateLarp createLarp={createLarp} />
            <LarpList>
              {larps.map(larp => (
                <LarpItem key={larp.id}>
                  <Larp name={larp.name} />
                  <CharacterSection>
                    {larp.characters &&
                      larp.characters.map(character => (
                        <CharacterArticle key={character.id}>
                          <Character larp={larp} character={character} />
                          <DeleteCharacter
                            character={character.id}
                            deleteCharacter={deleteCharacter}
                          />
                        </CharacterArticle>
                      ))}
                  </CharacterSection>
                  <hr />
                  <CreateCharacter
                    larp={larp.id}
                    createCharacter={createCharacter}
                  />
                  <hr />
                  <DeleteLarp larp={larp} deleteLarpFromDB={deleteLarpFromDB} />
                </LarpItem>
              ))}
            </LarpList>
          </article>
        </PageInner>
      </Page>
    );
  }
}

App.propTypes = {
  createCharacter: PropTypes.func,
  deleteCharacter: PropTypes.func,
  createLarp: PropTypes.func,
  deleteLarpFromDB: PropTypes.func,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
