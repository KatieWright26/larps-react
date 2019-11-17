import React from 'react';
import PropTypes from 'prop-types';
import { LarpItem, LarpListStyle } from './styles/Larps';
import CharacterList from './CharacterList';
import CreateCharacter from './CreateCharacter';
import Larp from './Larp';
import DeleteLarp from './DeleteLarp';

const LarpList = props => {
  const { larps } = props;
  return (
    <LarpListStyle>
      {larps.map(larp => (
        <LarpItem key={larp.id}>
          <Larp name={larp.name} />
          {larp.characters &&
            larp.characters.map(character => (
              <CharacterList
                key={character.id}
                larp={larp}
                character={character}
              />
            ))}
          <hr />
          <CreateCharacter larp={larp.id} />
          <hr />
          <DeleteLarp larp={larp} />
        </LarpItem>
      ))}
    </LarpListStyle>
  );
};

LarpList.propTypes = {
  larps: PropTypes.array,
};

export default LarpList;
