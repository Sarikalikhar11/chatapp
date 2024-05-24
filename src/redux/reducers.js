// src/redux/reducers.js
import { ADD_MESSAGE } from './actions';

const initialState = {
  messages: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    default:
      return state;
  }
};

export default rootReducer;
