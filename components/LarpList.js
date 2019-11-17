import React from 'react';
import PropTypes from 'prop-types';
import { LarpItem, LarpListStyle } from './styles/Larps';
import CharacterList from './CharacterList';
import CreateCharacter from './CreateCharacter';
import Larp from './Larp';
import DeleteLarp from './DeleteLarp';

const LarpList = props => {
  const { larps, deleteCharacter, createCharacter, deleteLarpFromDB } = props;
  return (
    <LarpListStyle>
      {larps.map(larp => (
        <LarpItem key={larp.id}>
          <Larp name={larp.name} />
          {larp.characters &&
            larp.characters.map(character => (
              <CharacterList
                larp={larp}
                character={character}
                deleteCharacter={deleteCharacter}
              />
            ))}
          <hr />
          <CreateCharacter larp={larp.id} createCharacter={createCharacter} />
          <hr />
          <DeleteLarp larp={larp} deleteLarpFromDB={deleteLarpFromDB} />
        </LarpItem>
      ))}
    </LarpListStyle>
  );
};

// PropTypes related to characters needs to be moved out
LarpList.propTypes = {
  larps: PropTypes.array,
  deleteCharacter: PropTypes.func,
  createCharacter: PropTypes.func,
  deleteLarpFromDB: PropTypes.func,
};

export default LarpList;
