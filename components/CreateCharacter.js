import { connect } from 'react-redux';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CharacterForm from './styles/CharacterForm';
import { createCharacterInDb } from '../actionCreators';

const mapStateToProps = state => ({
  larps: state.larps,
  characters: state.characters,
});

const mapDispatchToProps = { createCharacterInDb };

function CreateCharacter({ larpId, createCharacterInDb }) {
  const [name, setName] = useState('');
  const [larp, setLarp] = useState(larpId);

  return (
    <div>
      <CharacterForm
        onSubmit={e => {
          e.preventDefault();
          createCharacterInDb({ larp, name });
          setLarp('');
          setName('');
        }}
      >
        <input
          type="text"
          name="name"
          onChange={e => setName(e.target.value)}
          placeholder="Enter character name"
          value={name}
        />
        <input type="submit"></input>
      </CharacterForm>
    </div>
  );
}

CreateCharacter.propTypes = {
  larpId: PropTypes.number,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateCharacter);
