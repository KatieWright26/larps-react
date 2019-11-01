import React, { Component } from 'react';

const DeleteLarp = props => (
  <button onClick={() => props.deleteLarp(props.larp)}>Delete</button>
);

export default DeleteLarp;
