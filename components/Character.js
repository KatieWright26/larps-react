import React from 'react';
import PropTypes from 'prop-types';
import { CharacterSection, CharacterArticle } from './styles/Characters';
import DeleteCharacter from './DeleteCharacter';

const Character = ({ character }) => (
  <CharacterSection>
    <CharacterArticle>
      <h5>{character.name}</h5>
      <DeleteCharacter character={character.id} key={character.id} />
    </CharacterArticle>
  </CharacterSection>
);

Character.propTypes = {
  character: PropTypes.object,
};

export default Character;
