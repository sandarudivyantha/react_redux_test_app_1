import { SELECT_POST } from "../actions/types";

export default function selectedPostReducer(state = null, actions) {
  switch (actions.type) {
    case SELECT_POST:
      return actions.payload;
    default:
      return state;
  }
}
