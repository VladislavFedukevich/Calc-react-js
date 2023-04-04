import { combineReducers } from "redux";

const outputDisplayReducer = (state = ["0"], action) => {
  switch (action.type) {
    case "SET_OUTPUT_DISPLAY":
      return action.payload;
    default:
      return state;
  }
};

const historyReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_HISTORY":
      return action.payload;
    case "CLEAR_HISTORY":
      return [];
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  outputDisplay: outputDisplayReducer,
  history: historyReducer,
});

export default rootReducer;
