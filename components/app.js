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
                    {larp.characters.map(character => (
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
                  <DeleteLarp larp={larp} deleteLarp={deleteLarp} />
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
  deleteLarp: PropTypes.func,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
