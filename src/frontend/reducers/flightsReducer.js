import{FETCH_FLIGHTS} from '../actions/actionTypes'

const flightsReducer = (state = { data: {} }, action) => {
    switch (action.type) {
      case FETCH_FLIGHTS:
        return {
          ...state,
          data: action.data
        };
      default:
        return state;
    }

  }
  
  export default flightsReducer;