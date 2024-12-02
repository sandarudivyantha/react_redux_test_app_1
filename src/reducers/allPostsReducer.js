import { FETCH_BUTTON_CLICKED } from "../actions/types";

export default function allPostsReducer(state = null, actions) {
  switch (actions.type) {
    case FETCH_BUTTON_CLICKED:
      return actions.payload;
    default:
      return state;
  }
}
