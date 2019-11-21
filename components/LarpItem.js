import React from 'react';
import PropTypes from 'prop-types';
import { Link, useRouteMatch } from 'react-router-dom';
import { LarpItem } from './styles/Larps';
import Character from './Character';
import CreateCharacter from './CreateCharacter';
import Larp from './Larp';
import DeleteLarp from './DeleteLarp';

const LarpList = props => {
  const { larp } = props;
  const { url } = useRouteMatch();

  return (
    <LarpItem>
      <Larp
        name={larp.name}
        description={larp.description}
        date={larp.startDate}
        location={larp.location}
      />
      <hr />
      <h4>
        {larp.characters && larp.characters.length
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
      <Link to={`${url}/${larp.id}`}>
        <button>Read More...</button>
      </Link>
    </LarpItem>
  );
};

LarpList.propTypes = {
  larp: PropTypes.object,
};

export default LarpList;
