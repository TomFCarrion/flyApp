import { SET_FROM, SET_TO, SET_START_DATE, SET_END_DATE, SET_FROM_ID, SET_TO_ID } from '../actions/actionTypes';

const infoReducer = (state = { from: '', to: '' }, action) => {
  switch (action.type) {
    case SET_FROM:
      return {
        ...state,
        from: action.data,
      };
    case SET_TO:
      return {
        ...state,
        to: action.data,
      };
    case SET_FROM_ID:
      return {
        ...state,
        fromId: action.data,
      };
    case SET_TO_ID:
      return {
        ...state,
        toId: action.data,
      };
    case SET_START_DATE:
      return {
        ...state,
        startDate: action.data,
      };
    case SET_END_DATE:
      return {
        ...state,
        endDate: action.data,
      };
    default:
      return state;
  }
};

export default infoReducer;
