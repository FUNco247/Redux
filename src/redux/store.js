import { legacy_createStore as createStore } from "redux";

export const addToDo = (text) => {
  return {
    type: "ADD",
    text,
  };
};

export const deleteToDo = (id) => {
  return {
    type: "DELETE",
    id,
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      return [{ text: action.text, id: action.id }, ...state];
    case "DELETE":
      return state.filter((toDo) => toDo !== action.id);
    default:
      return state;
  }
};
const store = createStore(reducer);

export default store;
