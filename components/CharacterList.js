import React from 'react';
import PropTypes from 'prop-types';
import { CharacterSection, CharacterArticle } from './styles/Characters';
import Character from './Character';
import DeleteCharacter from './DeleteCharacter';

const CharacterList = props => {
  const { character, larp, deleteCharacter } = props;
  return (
    <CharacterSection>
      <CharacterArticle key={character.id}>
        <Character larp={larp} character={character} />
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
  larp: PropTypes.object,
  character: PropTypes.object,
};

export default CharacterList;
