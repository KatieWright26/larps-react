import React, { Component } from 'react';

const DeleteCharacter = props => (
  <button type="button" onClick={() => props.deleteCharacter(props.character)}>
    Delete
  </button>
);

export default DeleteCharacter;
