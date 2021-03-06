import request from 'request';

const setLarps = payload => ({ type: 'SET_LARPS', payload });
const deleteLarp = payload => ({ type: 'DELETE_LARP', payload });
const createLarp = payload => ({ type: 'CREATE_LARP', payload });
const createCharacter = payload => ({ type: 'CREATE_CHARACTER', payload });
const deleteCharacter = payload => ({
  type: 'DELETE_CHARACTER',
  payload,
});

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

const createLarpInDb = larp => dispatch => {
  request.post(
    `http://localhost:3000/api/v1/larps/`,
    {
      body: {
        name: larp.name,
        description: larp.description,
        location: larp.location,
        startDate: larp.startDate,
      },
      json: true,
    },
    (err, res) => {
      if (err) {
        console.log(err);
        return;
      }
      dispatch(createLarp(res.body.larp));
    }
  );
};

const createCharacterInDb = character => dispatch => {
  request.post(
    `http://localhost:3000/api/v1/characters/`,
    { body: { name: character.name, larp_id: character.larp }, json: true },
    (err, res) => {
      if (err) {
        console.log(err);
        return;
      }
      dispatch(createCharacter(res.body.character));
    }
  );
};

const deleteLarpFromDB = id => dispatch => {
  request.delete(`http://localhost:3000/api/v1/larps/${id}`, (err, res) => {
    if (err) {
      console.log(err);
      return;
    }
    dispatch(deleteLarp(id));
  });
};

const deleteCharacterFromDB = id => dispatch => {
  request.delete(
    `http://localhost:3000/api/v1/characters/${id}`,
    (err, res) => {
      if (err) {
        console.log(err);
        return;
      }
      dispatch(deleteCharacter(id));
    }
  );
};

export {
  deleteCharacterFromDB,
  requestLarpsFromDb,
  deleteLarpFromDB,
  createLarpInDb,
  createCharacterInDb,
};
