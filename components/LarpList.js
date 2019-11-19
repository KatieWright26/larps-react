import React from 'react';
import PropTypes from 'prop-types';
import { LarpItem, LarpListStyle } from './styles/Larps';
import Character from './Character';
import CreateCharacter from './CreateCharacter';
import Larp from './Larp';
import DeleteLarp from './DeleteLarp';

const LarpList = props => {
  const { larps } = props;
  return (
    <LarpListStyle>
      {larps.map(larp => (
        <LarpItem key={larp.id}>
          <Larp name={larp.name} description={larp.description} />
          {larp.characters &&
            larp.characters.map(character => (
              <Character key={character.id} larp={larp} character={character} />
            ))}
          <hr />
          <CreateCharacter larp={larp.id} />
          <hr />
          <DeleteLarp larp={larp} key={larp.id} />
        </LarpItem>
      ))}
    </LarpListStyle>
  );
};

LarpList.propTypes = {
  larps: PropTypes.array,
};

export default LarpList;
