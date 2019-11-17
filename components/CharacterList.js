import React from 'react';
import PropTypes from 'prop-types';
import { CharacterSection, CharacterArticle } from './styles/Characters';
import DeleteCharacter from './DeleteCharacter';

const CharacterList = props => {
  const { character, deleteCharacter } = props;
  return (
    <CharacterSection>
      <CharacterArticle>
        <h3>{character.name}</h3>
        <DeleteCharacter
          character={character.id}
          deleteCharacter={deleteCharacter}
        />
      </CharacterArticle>
    </CharacterSection>
  );
};

CharacterList.propTypes = {
  deleteCharacter: PropTypes.func,
  character: PropTypes.object,
};

export default CharacterList;
