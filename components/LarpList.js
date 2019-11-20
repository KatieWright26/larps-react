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
          <Larp
            name={larp.name}
            description={larp.description}
            date={larp.startDate}
            location={larp.location}
          />
          <hr />
          <h4>
            {larp.characters.length
              ? 'Characters:'
              : 'No Characters created. Create one below:'}
          </h4>
          {larp.characters &&
            larp.characters.map(character => (
              <Character key={character.id} larp={larp} character={character} />
            ))}
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
