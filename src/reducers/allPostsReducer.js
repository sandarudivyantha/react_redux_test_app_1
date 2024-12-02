import { FETCH_BUTTON_CLICKED } from "../actions/types";

export default function (state = null, actions) {
  switch (actions.type) {
    case FETCH_BUTTON_CLICKED:
      return actions.payload;
      break;
  }
  return state;
}
