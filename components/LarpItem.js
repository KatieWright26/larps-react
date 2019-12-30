import React from 'react';
import PropTypes from 'prop-types';
import { Link, useRouteMatch } from 'react-router-dom';
import { LarpItem } from './styles/Larps';
import Character from './Character';
import CreateCharacter from './CreateCharacter';
import Larp from './Larp';
import DeleteLarp from './DeleteLarp';

const LarpList = ({ larp }) => {
  const { url } = useRouteMatch();

  return (
    <LarpItem>
      <Larp larp={larp} />
      <hr />
      <h4>
        {larp.characters && larp.characters.length
          ? 'Characters:'
          : 'No Characters created. Create one below:'}
      </h4>
      {larp.characters &&
        larp.characters.map(character => (
          <Character key={character.id} character={character} />
        ))}
      <CreateCharacter larpId={larp.id} />
      <hr />
      <DeleteLarp larp={larp} key={larp.id} />
      <Link to={`${url}/${larp.id}`}>
        <button type="button">Read More...</button>
      </Link>
    </LarpItem>
  );
};

LarpList.propTypes = {
  larp: PropTypes.object,
};

export default LarpList;
