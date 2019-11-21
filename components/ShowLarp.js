import React from 'react';
import { useParams } from 'react-router-dom';

function ShowLarp() {
  const { larpId } = useParams();
  return <h3>Requested larp ID: {larpId}</h3>;
}
export default ShowLarp;
