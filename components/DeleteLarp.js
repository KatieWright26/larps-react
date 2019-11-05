import React, { Component } from 'react';

const DeleteLarp = props => (
  <button type="button" onClick={() => props.deleteLarpFromDB(props.larp.id)}>
    Delete {props.larp.name}
  </button>
);

export default DeleteLarp;
