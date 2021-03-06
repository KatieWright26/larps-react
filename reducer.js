const { produce } = require('immer');

const initialState = {
  user: { id: 1, name: 'Katie', larpIds: [1] },
  larps: [],
};

const reducer = produce((state = initialState, action) => {
  switch (action.type) {
    case 'DELETE_LARP':
      state.larps = state.larps.filter(l => l.id !== action.payload);
      break;
    case 'CREATE_LARP':
      state.larps.push(action.payload);
      break;
    case 'CREATE_CHARACTER':
      const id = action.payload.larp_id;
      const larpIdx = state.larps.findIndex(l => l.id === id);
      state.larps[larpIdx].characters.push({
        name: action.payload.name,
      });
      break;
    case 'DELETE_CHARACTER':
      state.larps = state.larps.filter(
        larp =>
          (larp.characters = larp.characters.filter(
            character => character.id !== action.payload
          ))
      );
      break;
    case 'SET_LARPS':
      state.larps = action.payload;
      break;
    default:
      return state;
  }
});

module.exports = reducer;
