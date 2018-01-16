import { FETCH_WEATHER } from '../actions/index'

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // return state.concat([action.payload.data]); is the same as:
      // inserts the data at the beginning of the array.
      // doesn't mutate the array; it creates a new array
      return [ action.payload.data, ...state ]
      break;
    default:

  }

  return state;
}
