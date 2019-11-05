import request from 'request';

const setLarps = payload => ({ type: 'SET_LARPS', payload });
const deleteLarp = payload => ({ type: 'DELETE_LARP', payload });

const requestLarpsFromDb = () => dispatch => {
  request.get('http://localhost:3000/api/v1/larps', (err, res) => {
    if (err) {
      console.log(err);
      return;
    }
    const larps = JSON.parse(res.body);
    dispatch(setLarps(larps));
  });
};

const deleteCharacter = payload => ({
  type: 'DELETE_CHARACTER',
  payload,
});

const createLarp = payload => ({ type: 'CREATE_LARP', payload });

const deleteLarpFromDB = id => dispatch => {
  request.delete(`http://localhost:3000/api/v1/larps/${id}`, (err, res) => {
    if (err) {
      console.log(err);
      return;
    }
    dispatch(deleteLarp(id));
  });
};
const createCharacter = payload => ({ type: 'CREATE_CHARACTER', payload });

export {
  createCharacter,
  createLarp,
  deleteCharacter,
  deleteLarp,
  setLarps,
  requestLarpsFromDb,
  deleteLarpFromDB,
};
